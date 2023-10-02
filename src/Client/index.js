/*
	:: Sercord :: Alpha 0.0.6 | 10/02/23 ::
	https://github.com/paigeroid/sercord

*/

/* :: Created by @paigeroid using :: *//*
    - aepl: https://github.com/paigeroid/aepl
	- Stews: https://github.com/paigeroid/stews
    - Discord.JS: https://github.com/discordjs/discord.js
*/



const cl = require('aepl');
const fs = require('fs');
import('node-fetch');

const { Soup, Noodle } = require('stews');
const { Client, Routes, REST } = require('discord.js');

const serv_dir = require('../Services/_funkydir');
const cust_dir = require('./custard/_funkydir');

const exp = new Soup(Object);



class SerClient {
    constructor(/**/) {
        this.token = undefined;
        this.shit = new Client(...Array.from(arguments));
		this.services = new Soup(Object);


        /* service compiling */
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
            let serv = require(`../Services/${folder}`);
			this.services.push(serv.name, serv);
        });



        /* function compiling */
        let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        cust.forEach( (file) => {
            require(`./custard/${file}`);
        });



        /* command handling */
        this.commands = new Soup(Object);
            

            
        /* event and permission handling */
        this.events = new Soup(Object);

		
		// need to be awaited
		this.DefEvents = require('../Services/EventService/_deflist.js');
		this.DefPerms = require('../Services/PermissionService/_deflist.js');

		
		// custom events and permissions
		this.CustEvents = require('../Services/EventService/_custlist.json');
		this.CustPerms = require('../Services/PermissionService/_custlist.json');
		
		this.CustEvents.forEach( (name) => {
			this.events.push( name, new this.Event() );
		});



		// send event
		this.shit.on("messageCreate", async (ctx) => {
			await this.events.get("send").fire(ctx);
		});
		

		// registering slash commands
		this.shit.on("ready", async (ctx) => {
			if (this.commands.length <= 0) return;
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
		});

		
		// interaction stuff
		this.shit.on("interactionCreate", async (ctx) => {
			if (ctx.isButton()) { await this.events.buttonPress.fire(ctx); }
			if (ctx.isStringSelectMenu()) { await this.events.selectionSubmit.fire(ctx); }
			if (ctx.isButton() || ctx.isStringSelectMenu()) { await this.events.rowAction.fire(ctx); }
			
			
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

				await raw.data(ctx, cmd);
				await this.events.commandRan.fire(ctx, cmd);
			}
		});
	}
}


exp.pull("Client", cl.from(SerClient));
exp.pull("globals", Soup.new(Object));

module.exports = exp;
