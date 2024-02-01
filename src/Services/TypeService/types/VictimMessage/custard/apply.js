const { AuditLogEvent } = require('discord.js');
const VictimMessage = require('../index.js');
const { Soup } = require('stews');
const util = require('util');


VictimMessage.newF("apply", async function(ctx, actionType=null) {
    const client = this.parent.parent;
    client.import("types", "messages", "channels", "guilds", "util");

	let msg = new types.Message
	await msg.apply(ctx);

	Object.assign(this, msg);
	util.inherits(this.constructor, msg.constructor);
	
    this.deleted = (actionType == 0);
    this.edited = (actionType == 1);


    // times
    let deleted = this.deleted;
    let edited = this.edited;
    
	this.timestamps.deleted = (deleted) ? new Timestamp() : undefined;
    this.timestamps.edited = (edited) ? new Timestamp() : undefined;


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

    if (this.edited) {
        this.edits = await messages.get(ctx.id, ctx.channel);
    }

        /*
	else if (this.deleted) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MessageDelete,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.reason = log.reason;
            this.log = log;
        }
    }*/

	
	let pd = Soup.from(Object.getOwnPropertyDescriptors(msg.__proto__));

	for ( let [ prop, data ] of pd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(msg);
            else if (data.get) data.get = data.get.bind(msg);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
});
