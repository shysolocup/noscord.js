/*
	:: noscord.js :: Dev 0.0.15 | 10/06/23 ::
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
        this.shit = new Client(...Array.from(arguments));
		this.services = new Soup(Object);


        /* service compiling */
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
            let serv = require(`../Services/${folder}`);
			this.services.push(serv.name, serv);
        });


		this.types = new this.TypeService;



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


		let events = this.events;


		// send event
		this.shit.on("messageCreate", async function(ctx) {
			await events.get("send").fire(...Array.from(arguments));
			if (ctx.reference) await events.get("reply").fire(...Array.from(arguments));
		});


		// delete event
		this.shit.on("messageDelete", async function() {
			await events.get("delete").fire(...Array.from(arguments));
		});


		// edit event
		this.shit.on("messageUpdate", async function() {
			await events.get("edit").fire(...Array.from(arguments));
		});


		// react event
		this.shit.on("messageReactionAdd", async function() {
			await events.get("reaction").fire(...Array.from(arguments));
		});


		// join event
		this.shit.on("guildMemberAdd", async function() {
			await events.get("join").fire(...Array.from(arguments));
		});


		// leave/kick events
		this.shit.on("guildMemberRemove", async function(member) {
			await events.get("leave").fire(...Array.from(arguments));

			const logs = await member.guild.fetchAuditLogs({
				limit: 1,
				type: 'MEMBER_KICK',
			});

			const log = fetchedLogs.entries.first();
			if (!log) return;

			const { executor, target } = log;

			if (member.id == target.id) {
				await events.get("kick").fire(...Array.from(arguments));
			}
		});


		// ban event
		this.shit.on("guildBanAdd", async function() {
			await events.get("ban").fire(...Array.from(arguments));
		});


		// unban event
		this.shit.on("guildBanRemove", async function() {
			await events.get("unban").fire(...Array.from(arguments));
		});


		// join/leave/move vc event
		this.shit.on("voiceStateUpdate", async function(oldVS, newVS) {
			if (!oldVS.channelID && newVS) await events.get("joinVoice").fire(...Array.from(arguments));
			else if (!newVS.channelID && oldVS) await events.get("leaveVoice").fire(...Array.from(arguments));
			else await events.get("moveVoice").fire(...Array.from(arguments));
		});
		

		// registering slash commands
		this.shit.on("ready", async (ctx) => {

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


exp.pull("Client", cl.from(NosClient));

module.exports = exp;
