const GuildMemberAction = require('../index.js');
const { AuditLogEvent } = require('discord.js');


GuildMemberAction.newF("apply", async function(ctx, actionType) {
    
    this.isKick = (actionType == 1);
    this.isBan = (actionType == 2);
    this.isUnban = (actionType == 3);

    this.id = ctx.id;
    this.bot = ctx.bot;

    if (this.isKick) {
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberKick,
        });

        const log = logs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, ctx.guild);
        }
    }
});
