const VictimMember = require('../index.js');
const { AuditLogEvent } = require('discord.js');


VictimMember.newF("apply", async function(ctx, actionType) {
    const client = this.parent.parent;
    client.import("users", "types");
    
    this.isKick = (actionType == 1);
    this.isBan = (actionType == 2);
    this.isUnban = (actionType == 3);
    this.isTimeout = (actionType == 4);

    this.victim = new types.GuildMember;
    this.victim.apply(ctx);
    
    this.victimId = ctx.id;

    this.guild = await guilds.get(ctx.guildId);
    this.guildId = ctx.guildId;

    if (this.isKick) {
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

    else if (this.isBan) {
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


    else if (this.isUnban) {
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
