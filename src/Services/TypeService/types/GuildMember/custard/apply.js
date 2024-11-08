const GuildMember = require('../index.js');


GuildMember.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "util", "types");

    // ids
    this.id = ctx.id;
    this.mention = `<@${ctx.id}>`
    this.user = await users.get(ctx.id);
    this.username = this.user.username;
    this.globalName = this.user.globalName
    this.tag = (this.user.tag && this.user.tag.endsWith("#0")) ? ctx.username : this.user.tag;
    this.url = `https://discord.com/users/${ctx.id}`;
    this.discriminator = ctx.discriminator;
    this.nickname = ctx.displayName;
    this.flags = ctx.flags;
    this.bot = this.user.bot;


    // guild
    this.guildId = ctx.guildId;
    this.guild = await guilds.get(ctx.guildId);
	this.owner = (this.guild && this.guild.owner.id == ctx.id);


    // avatar
    this.avatar = this.user.avatar;
    this.avatarUrl = this.user.avatarUrl;
    this.decor = this.user.decor;
    this.decorUrl = this.user.decorUrl;
    this.banner = this.user.banner;
    this.bannerUrl = this.user.bannerUrl;


    // presence
    this.presence = ctx.presence;
    this.status = (ctx.presence) ? ctx.presence.status : undefined;
    this.activity = (ctx.presence) ? ctx.presence.activity : undefined;


    // colors
    this.color = {
        base10: ctx.displayColor,
        hex: ctx.displayHexColor,
		hexInt: (ctx.displayHexColor) ? Number(ctx.displayHexColor.replace("#", "0x")) : null
    };

    
    // dms
    this.dms = ctx.dmChannel;


    // times
    let user = this.user;
    this.timestamps = {
        joined: new Timestamp(ctx.joinedAt),
        disabled: new Timestamp(ctx.communicationDisabledUntil),
        premium: new Timestamp(ctx.premiumSince),
        created: user.timestamps.created,
    };
    this.joinedAt = ctx.joinedAt;
    this.communicationDisabledUntil = ctx.communicationDisabledUntil;
    this.premiumSince = ctx.premiumSince;
    this.createdAt = user.timestamps.created;
    


    // moderation stuff
    this.bannable = ctx.bannable;
    this.kickable = ctx.kickable;
    this.manageable = ctx.manageable;
    this.moderatable = ctx.moderatable;


    // other stuff idk
    this.pending = ctx.pending;
    this.voice = ctx.voice;

    
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});
});
