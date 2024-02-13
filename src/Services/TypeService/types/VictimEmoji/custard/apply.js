const { AuditLogEvent } = require('discord.js');
const VictimEmoji = require('../index.js');
const { Soup } = require('stews');
const util = require('util');


VictimEmoji.newF("apply", async function(ctx, actionType=null) {
    const client = this.parent.parent;
    client.import("types", "messages", "channels", "guilds", "util");

	let emoji = new types.Emoji;
	await emoji.apply(ctx);

	Object.assign(this, emoji);
	util.inherits(this.constructor, emoji.constructor);
	
	this.created = (actionType == 0);
    this.deleted = (actionType == 1);
    this.edited = (actionType == 2);


    // times
	let created = this.created;
    let deleted = this.deleted;
    let edited = this.edited;
    
    this.timestamps.created = (created) ? new Timestamp() : undefined;
	this.timestamps.deleted = (deleted) ? new Timestamp() : undefined;
    this.timestamps.edited = (edited) ? new Timestamp() : undefined;


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});


	if (this.edited) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.EmojiUpdate,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.reason = log.reason;
            this.log = log;
        }
    }

	else if (this.deleted) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.EmojiDelete,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.reason = log.reason;
            this.log = log;
        }
    }

	else if (this.create) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.EmojiCreate,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.reason = log.reason;
            this.log = log;
        }
    }

	
	let pd = Soup.from(Object.getOwnPropertyDescriptors(emoji.__proto__));

	for ( let [ prop, data ] of pd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(emoji);
            else if (data.get) data.get = data.get.bind(emoji);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
});
