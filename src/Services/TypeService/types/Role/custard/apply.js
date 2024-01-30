const Role = require('../index.js');


Role.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "util", "att");
    
    // ids
    this.id = ctx.id;
    this.mention = `<@&${ctx.id}>`;
	let iconUrl = ctx.iconURL().replace(".webp", ".png");
	this.icon = await att.create(iconUrl, { name: util.genCode(9) });
	this.iconUrl = iconUrl;
	this.iconURL = iconUrl;
	this.position = ctx.position;
	this.rawPosition = ctx.rawPosition;
	this.tags = ctx.tags;
	this.emoji = ctx.unicodeEmoji;
	this.permissions = ctx.permissions;

	this.color = ctx.color;
	this.flags = ctx.flags;

	// guild
	this.guild = await guilds.get(ctx.guild.id);
	this.guildId = ctx.guild.id;


	// booleans
	this.managed = ctx.managed;
	this.editable = ctx.editable;
	this.hoist = ctx.hoist;
	this.mentionable = ctx.mentionable;


	// colors
    this.color = {
        base10: ctx.color,
        hex: ctx.hexColor,
		hexInt: (ctx.hexColor) ? Number(ctx.hexColor.replace("#", "0x")) : null
    };
	
	
    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
    };
    this.createdAt = ctx.createdAt;

    
    if (this.raw) return;
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

	this.client = client;
});
