const VictimMember = require('../index.js');
const { AuditLogEvent } = require('discord.js');


VictimMember.newF("apply", async function(ctx, actionType=null) {
    const client = this.parent.parent;
    client.import("users", "types");

	let member = new types.GuildMember;
	await member.apply(ctx);

	Object.assign(this, member);
	
	this.joined = (actionType == 0);
	this.left = (actionType == 1);
    this.kicked = (actionType == 2);
    this.banned = (actionType == 3);
    this.unbanned = (actionType == 4);
    this.timedOut = (actionType == 5);

    if (this.kicked) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberKick,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, ctx.guild);
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
            this.moderator = await users.get(log.executor.id, ctx.guild);
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
            this.moderator = await users.get(log.executor.id, ctx.guild);
            this.modId = log.executor.id;
            this.reason = log.reason;
            this.log = log;
        }
    }

    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});
});
