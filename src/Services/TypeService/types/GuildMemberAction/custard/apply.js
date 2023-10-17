const GuildMemberAction = require('../index.js');


GuildMemberAction.newF("apply", async function(ctx, actionType) {
    const client = this.parent.parent;
    client.import("guilds", "channels", "users");

    
    this.actionType = actionType;
    this.id = ctx.id;
    this.bot = ctx.bot;
    this.me = (ctx.id == client.id);


    if (actionType == 1) { // kick
        const logs = await ctx.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_KICK',
        });

        const log = fetchedLogs.entries.first();

        if (log) {
            this.moderator = await users.get(log.executor.id, ctx.guild);
        }
    }
});
