/*
	:: noscord.js :: TypeDev 0.1.5 | 10/27/23 ::
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
		this.spreads = new Soup(Array);
		


		this.services = Soup.from({
			types: new this.TypeService,
			users: new this.UserService,
			events: new this.EventService,
			commands: new this.CommandService,
			guilds: new this.GuildService,
			roles: new this.RoleService,
			errors: new this.ErrorService,
			channels: new this.ChannelService,
			app: new this.UtilService,
			util: new this.UtilService,
			attachments: new this.AttachmentService,
			components: new this.ComponentService,
			expressions: new this.ExpressionService,
			messages: new this.MessageService,
			permissions: new this.PermissionService,
			voice: new this.VoiceService,
			logs: new this.LogService
		});

		
		this.services.forEach( (name, service) => {
			if (!this[name]) this[name] = service;
		});

		
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
		this._baseEvents = require('../Services/EventService/_baseEvents.js');
		this._basePerms = require('../Services/PermissionService/_basePerms.js');

		this._staticEvents = require('../Services/EventService/_staticEvents.json');

		this._staticEvents.forEach( (event) => {
			let ev = new this.Event();
			
			if (event instanceof Array) {
				event.forEach( e => this.events.push(e, ev) );
			}
			else {
				this.events.push(ev);
			}
		});

		
		// custom events and permissions
		this._customPerms = require('../Services/PermissionService/_customPerms.json');


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


			this.spreads.forEach( async (s) => {
				await s.data(...s.content);
			});


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
				if (ctx.cooldown && ctx.cooldown.active) ctx.cooldown.add(ctx.user);
				if (ctx.onCooldown) await this.events.get("cooldown").fire(ctx, cmd);
				
			}
		});


		this._instances = NosClient._instances;
		this._instances.push(this);


		// moved to the bottom of the class for screenshot protection
        this.token = undefined;
	}
}


if (!NosClient._instances) Object.defineProperty(NosClient, "_instances", {
	value: new Soup(Array)
});


exp.pull("Client", cl.from(NosClient));
exp.pull("Instances", NosClient._instances);
module.exports = exp;
