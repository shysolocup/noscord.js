const VictimMember = require('../index.js');
const { AuditLogEvent } = require('discord.js');


VictimMember.newF("apply", async function(ctx, actionType=null) {
    const client = this.parent.parent;
    client.import("users", "types");

	let member = new types.GuildMember;
	await member.apply(ctx);

	Object.assign(this, member);
	util.inherits(this.constructor, member);
	
	this.joined = (actionType == 0);
	this.edited = (actionType == 1);
	this.left = (actionType == 2);
    this.kicked = (actionType == 3);
    this.banned = (actionType == 4);
    this.unbanned = (actionType == 5);
    this.timedOut = (actionType == 6);

	if (this.edited) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberUpdate,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.reason = null
            this.log = log;
        }
    }
	
    else if (this.kicked) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberKick,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.reason = log.reason;
            this.log = log;
        }
    }

    else if (this.banned) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberBanAdd,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.modId = log.executor.id;
            this.reason = log.reason;
            this.log = log;
        }
    }


    else if (this.unbanned) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberBanRemove,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, this.guild);
            this.modId = log.executor.id;
            this.reason = log.reason;
            this.log = log;
        }
    }

	
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

	
	let pd = Soup.from(Object.getOwnPropertyDescriptors(member.__proto__));

	for ( let [ prop, data ] of pd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(member);
            else if (data.get) data.get = data.get.bind(member);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
});
