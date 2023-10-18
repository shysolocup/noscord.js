const GuildMember = require('../index.js');


GuildMember.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "app");

    // ids
    this.id = ctx.id;
    this.mention = `<@${ctx.id}>`
    this.username = ctx.username;
    this.tag = (ctx.tag.endsWith("#0")) ? ctx.username : ctx.tag;
    this.discriminator = ctx.discriminator;
    this.user = await users.get(ctx.id);
    this.nickname = ctx.displayName;
    this.flags = ctx.flags;
    this.bot = this.users.bot;


    // guild
    this.guildId = ctx.guildId;
    this.guild = await guilds.get(ctx.guildId);


    // avatar
    this.avatar = this.user.avatar;
    this.avatarUrl = this.user.avatarUrl;
    this.decor = this.user.decor;
    this.decorUrl = this.user.decorUrl;
    this.banner = this.user.banner;
    this.bannerUrl = this.user.bannerUrl;


    // presence
    this.presence = ctx.presence;
    this.status = ctx.presence.status;
    this.activity = ctx.presence.activity;


    // colors
    this.color = {
        base10: ctx.displayColor,
        hex: ctx.displayHexColor
    };

    
    // dms
    this.dms = ctx.dmChannel;


    // times
    let user = this.user;
    this.times = {
        joined: new Timestamp(ctx.joinedAt),
        disabled: new Timestamp(ctx.communicationDisabledUntil),
        premium: new Timestamp(ctx.premiumSince),
        created: new Timestamp(user.createdAt),
    };


    // moderation stuff
    this.bannable = ctx.bannable;
    this.kickable = ctx.kickable;
    this.manageable = ctx.manageable;
    this.moderatable = ctx.moderatable;


    // other stuff idk
    this.pending = ctx.pending;
    this.voice = ctx.voice;

    
    this.raw = ctx;
});
