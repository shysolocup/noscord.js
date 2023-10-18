const GuildMember = require('../index.js');


GuildMember.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users");

    // ids
    this.id = ctx.id;
    this.username = ctx.username;
    this.tag = (ctx.tag.endsWith("#0")) ? ctx.username : ctx.tag;
    this.bannable = ctx.bannable;
    this.nickname = ctx.nickname;
    this.presence = ctx.presence;
    this.status = ctx.presence.status;
    this.activity = ctx.presence.activity;
    this.bot = false;


    // guild
    this.guildId = ctx.guildId;
    this.guild = await guilds.get(ctx.guildId);


    // avatar
    this.avatar = await users.avatar(ctx);
    this.avatarUrl = await users.avatarUrl(ctx);

    
    this.raw = ctx;
});
