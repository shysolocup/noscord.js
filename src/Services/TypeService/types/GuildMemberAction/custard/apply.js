const GuildMemberAction = require('../index.js');
const { AuditLogEvent } = require('discord.js');


GuildMemberAction.newF("apply", async function(ctx, actionType) {
    const client = this.parent.parent;
    client.import("users");
    
    this.isKick = (actionType == 1);
    this.isBan = (actionType == 2);
    this.isUnban = (actionType == 3);
    this.isTimeout = (actionType == 4);

    this.victim = await users.get(ctx.id, ctx.guild);

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
            this.reason = log.reason;
            this.log = log;
        }
    }
});
