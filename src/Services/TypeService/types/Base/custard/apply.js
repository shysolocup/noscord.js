const Base = require('../index.js');
const pend = require('pender');


Base.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util");

    // ids
    this.id = ctx.id;
    this.name = ctx.name;
    
    if (ctx.type) this.type = ctx.type;
	if (ctx.guildId) {
		this.guild;
    	this.guildId = ctx.guildId;
	}

    // stuff
    if (ctx.guildId) this.guild = await guilds.get(ctx.guildId);
	if (ctx.parentId) this.category = await channels.get(ctx.parentId, this.guild);
});
