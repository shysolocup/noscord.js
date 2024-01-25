/*
	:: noscord.js :: TypeDev 0.1.6 | 01/24/24 ::
	https://github.com/paishee/noscord.js

*/

/* :: Created by @paishee using :: *//*
    - aepl: https://github.com/paishee/aepl
	- Stews: https://github.com/paishee/stews
 	- Pender: https://github.com/paishee/pender
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
    constructor(settings={}) {

		/* stuff */
		this.user = undefined;
		this.prefix = settings.prefix;
		this.application = undefined;


		/* fix intents */
		if (!settings.intents) settings.intents = 3276799;

		
		/* base */
		let _base = new Client(settings);
		Object.defineProperty(this, "_base", {
			get() { return _base; }
		});


        /* service compiling */
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
            require(`../Services/${folder}`);
        });

		

		/* command handling */
        this.slashCommands = new Soup(Object);
		this.prefixCommands = new Soup(Object);
            

            
        /* event and permission handling */
        this.events = new Soup(Object);
		this.spreads = new Soup(Array);
		

		/* service stuff */
		this.services = Soup.from({
			types: new this.TypeService,
			users: new this.UserService,
			events: new this.EventService,
			commands: new this.CommandService,
			guilds: new this.GuildService,
			roles: new this.RoleService,
			errors: new this.ErrorService,
			channels: new this.ChannelService,
			util: new this.UtilService,
			attachments: new this.AttachmentService,
			components: new this.ComponentService,
			expressions: new this.ExpressionService,
			messages: new this.MessageService,
			permissions: new this.PermissionService,
			voice: new this.VoiceService,
			logs: new this.LogService,
			addons: new this.AddonService,
			storage: new this.StorageService
		});

		this.services.app = this.services.util;
		this.services.att = this.services.attachments;
		this.services.perms = this.services.permissions;
		this.services.err = this.services.errors;
		this.services.members = this.services.users;
		this.services.exp = this.services.expressions;
		this.services.msg = this.services.messages;
		
		this.services.forEach( (name, service) => {
			if (!this[name]) this[name] = service;
		});

		
		this._handler = new this.services.events.GlueHandler;
		this.Embed = this.services.components.Embed;
		this.Button = this.services.components.Button;
		this.Selection = this.services.components.Selection;
		this.Row = this.services.components.Row;
		this.stores = this.services.storage.stores;



        /* function compiling */
        let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        cust.forEach( (file) => {
            require(`./custard/${file}`);
        });

		
		// need to be awaited
		this._baseEvents = require('../Services/EventService/_baseEvents.js');
		this._basePerms = require('../Services/PermissionService/_basePerms.js');


		// static stuff
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

		
		// custom permissions
		this._customPerms = require('../Services/PermissionService/_customPerms.json');
		

		/* registering slash commands */
		this._base.on("ready", async (ctx) => {

			
			// setup
			let token = this.token;
			this.user = ctx.user;
			this.application = ctx.application;


			this.spreads.forEach( async (s) => {
				await s.data(...s.content);
			});


			if (this.slashCommands.length > 0) {

				// registering commands
				var jsonCommands = this.slashCommands.values.map( (command) => {
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

		
				/* runs slash commands */
				this.on("slashCommandRan", async (ctx, cmd) => {
					if (this.slashCommands.has(ctx.name)) {
						
						await ctx.data(ctx, cmd);
						if (ctx.cooldown && ctx.cooldown.active) ctx.cooldown.add(ctx.user);
						if (ctx.onCooldown) await this.events.get("cooldown").fire(ctx, cmd);
						
					}
				});
			}


			if (this.prefixCommands.length > 0) {
				
				/* runs prefix commands */
				this.on("prefixCommandRan", async (ctx, cmd) => {
					if (this.prefixCommands.has(ctx.name)) {
						
						await ctx.data(ctx, cmd);
						if (ctx.cooldown && ctx.cooldown.active) ctx.cooldown.add(ctx.user);
						if (ctx.onCooldown) await this.events.get("cooldown").fire(ctx, cmd);
						
					}
				});
			}
		});


		/* instances */
		this._instances = NosClient._instances;
		this._instances.push(this);


		/* moved to the bottom of the class for screenshot protection */
        this.token = undefined;
	}
}


if (!NosClient._instances) Object.defineProperty(NosClient, "_instances", {
	value: new Soup(Array)
});


exp.pull("Client", cl.from(NosClient));
exp.pull("Instances", NosClient._instances);
module.exports = exp;
