const Base = require('../index.js');
const pend = require('pender');


Base.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util");

    // id
    this.id = ctx.id;

	// optional info
    if (ctx.name) this.name = ctx.name;
    if (ctx.type) this.type = ctx.type;
	if (ctx.flags) this.flags = ctx.flags;


	// booleans
	if (ctx.available) this.available = ctx.available;
	if (ctx.nsfw) this.nsfw = ctx.nsfw;
	if (ctx.viewable) this.viewable = ctx.viewable;
	if (ctx.deletable) this.deletable = ctx.deletable;
	if (ctx.moderatable) this.moderatable = ctx.moderatable;
	if (ctx.bannable) this.bannable = ctx.bannable;
	if (ctx.kickable) this.kickable = ctx.kickable;
	if (ctx.manageable) { this.manageable = ctx.manageable; this.managable = ctx.manageable; }
	if (ctx.managed) this.managed = ctx.managed;
	if (ctx.requiresColons) this.requiresColons = ctx.requiresColons
	
	// guild info
	if (ctx.guildId) {
		this.guild;
    	this.guildId = ctx.guildId;

		this.guild = await guilds.get(ctx.guildId);
	}
});
