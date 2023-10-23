/*
	:: noscord.js :: TypeDev 0.1.2 | 10/23/23 ::
	https://github.com/paigeroid/noscord.js

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



class NosClient {
    constructor(/**/) {
        this.token = undefined;
		this.user = undefined;
        this._base = new Client(...Array.from(arguments));


        /* service compiling */
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
            require(`../Services/${folder}`);
        });

		

		/* command handling */
        this.commands = new Soup(Object);
            

            
        /* event and permission handling */
        this.events = new Soup(Object);
		


		this.services = {
			types: new this.TypeService,
			users: new this.UserService,
			events: new this.EventService,
			commands: new this.CommandService,
			guilds: new this.GuildService,
			roles: new this.RoleService,
			errors: new this.ErrorService,
			channels: new this.ChannelService,
			app: new this.AppService,
			attachments: new this.AttachmentService,
			components: new this.ComponentService,
			expressions: new this.ExpressionService,
			messages: new this.MessageService,
			permissions: new this.PermissionService,
			voice: new this.VoiceService,
		}

		this.types = this.services.types;
		this.command = this.services.commands.create;
		this._handler = new this.services.events.GlueHandler;
		this.Embed = this.services.components.Embed;
		this.Button = this.services.components.Button;
		this.Selection = this.services.components.Selection;
		this.Row = this.services.components.Row;



        /* function compiling */
        let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        cust.forEach( (file) => {
            require(`./custard/${file}`);
        });

		
		// need to be awaited
		this._defEvents = require('../Services/EventService/_deflist.js');
		this._defPerms = require('../Services/PermissionService/_deflist.js');

		
		// custom events and permissions
		this._custPerms = require('../Services/PermissionService/_custlist.json');


		/*

		// react event
		this._base.on("messageReactionAdd", async function() {
			await events.get("reaction").fire(...Array.from(arguments));
		});


		// join/leave/move vc event
		this._base.on("voiceStateUpdate", async function(oldVS, newVS) {
			if (!oldVS.channelID && newVS) await events.get("joinVoice").fire(...Array.from(arguments));
			else if (!newVS.channelID && oldVS) await events.get("leaveVoice").fire(...Array.from(arguments));
			else await events.get("moveVoice").fire(...Array.from(arguments));
		});
		*/
		

		// registering slash commands
		this._base.on("ready", async (ctx) => {

			
			// setup
			let token = this.token;
			this.user = ctx.user;
			this.application = ctx.application;


			if (this.commands.length <= 0) return;


			// registering commands
			var jsonCommands = this.commands.values.map( (command) => {
				let info = command.info.copy()
				
				// removing cooldown because it breaks it because it's stupid
				if (info.has("cooldown")) info.delete("cooldown");
	
				return info.toJSON()
				
			});
	
			this.rest = new REST().setToken(token);

			await this.rest.put(
				Routes.applicationCommands(this.application.id),
				{ body: jsonCommands }
			);
		});

		
		// runs slash commands
		this.on("commandRan", async (ctx, cmd) => {
			if (this.commands.has(ctx.name)) {
				await ctx.data(ctx, cmd);
			}
		});
	}
}


exp.pull("Client", cl.from(NosClient));
module.exports = exp;
