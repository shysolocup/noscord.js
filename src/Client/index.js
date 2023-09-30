/*
	:: WumpCli :: Alpha 0.0.2 | 09/30/23 ::
	https://github.com/paigeroid/wumpcli

*/

/* :: Created by @paigeroid using :: *//*
    - aepl: https://github.com/paigeroid/aepl
	- Stews: https://github.com/paigeroid/stews
    - Discord.JS: https://github.com/discordjs/discord.js
*/



const cl = require('aepl');
const fs = require('fs');
import('node-fetch');

const { Soup } = require('stews');
const { Client, Routes, REST } = require('discord.js');

const serv_dir = require('../Services/_funkydir');
const cust_dir = require('./custard/_funkydir');

const exp = new Soup(Object);



class WumpClient {
    constructor(/**/) {
        this.token = undefined;
        this.shit = new Client(...Array.from(arguments));



        /* service compiling */
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
            require(`../Services/${folder}`);
        });



        /* function compiling */
        let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        cust.forEach( (file) => {
            require(`./custard/${file}`);
        });



        /* command handling */
        this.commands = new Soup(Object);
            

            
        /* event handling */
        this.events = new Soup(Object);
		
		this.DefEvents = require('../Services/EventService/deflist.json');
         
		this.DefEvents.forEach( (name) => {
			this.events.push( name, new this.Event() );
		});

		

		// registering slash commands
		this.shit.on("ready", async (ctx) => {
			if (this.commands.length <= 0) return
			let token = this.token;


			// registering commands
			var jsonCommands = this.commands.values.map( (command) => {
				let info = command.info.copy()
				
				// removing cooldown because it breaks it because it's stupid
				if (info.has("cooldown")) info.delete("cooldown");
	
				return info.toJSON()
				
			});
	
			this.rest = new REST().setToken(token)
			fetch('https://discordapp.com/api/oauth2/applications/@me', {
				headers: {
					authorization: `Bot ${token}`,
				},
			})
	
				.then(result => result.json())
				.then( async (response) => {
					const { id } = response;
					
					await this.rest.put(
						Routes.applicationCommands(id),
						{ body: jsonCommands }
					);
			})
			.catch(console.error);



			// registering commands
			this.shit.on("interactionCreate", async (ctx) => {
				if (ctx.isChatInputCommand() && this.commands.has(ctx.commandName)) {
					let raw = this.commands.get(ctx.commandName);

					ctx.author = ctx.user;
					
					let cmd = Soup.from({
						name: raw.info.get("name"),
						description: raw.info.get("description"),
						cooldown: raw.info.get("cooldown"),
						options: raw.info.get("options"),
						nsfw: raw.info.get("nsfw"),
						data: raw.data
		
					}).copy().pour();
					cmd.args = ctx.options.data;

					return await raw.data(ctx, cmd);
				}
			});
		});
    }
}


exp.pull("Client", cl.from(WumpClient));
module.exports = exp;
