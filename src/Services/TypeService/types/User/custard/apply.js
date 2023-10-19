const User = require('../index.js');


User.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "app");

    // names
    this.username = ctx.username;
    this.tag = (ctx.tag.endsWith("#0")) ? ctx.username : ctx.tag;
    this.discriminator = ctx.discriminator;
    this.globalName = ctx.globalName;
    
    
    // ids
    this.id = ctx.id;
    this.mention = `<@${ctx.id}>`
    this.flags = ctx.flags;
    this.bot = ctx.bot;


    // accessories
    this.avatar = await users.avatar(ctx);
    this.avatarUrl = users.avatarUrl(ctx);
    this.decor = await users.decor(ctx);
    this.decorUrl = users.decorUrl(ctx)
    this.banner = await users.banner(ctx);
    this.bannerUrl = await users.bannerUrl(ctx);

    
    this.accent = {
        base10: ctx.acccentColor,
        hex: ctx.hexAccentColor
    };
    


    // presence
    this.presence = ctx.presence;
    this.status = ctx.presence.status;
    this.activity = ctx.presence.activity;
    this.system = ctx.system;
    this.partial = ctx.partial;


    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
    };


    this.dms = ctx.dmChannel
    
    
    this.raw = ctx;
});
