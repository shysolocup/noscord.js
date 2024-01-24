const BaseChannel = require('../index.js');
const pend = require('pender');


BaseChannel.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util");

    // ids
    this.id = ctx.id;
    this.name = ctx.name;
    this.nsfw = ctx.nsfw;
    this.type = ctx.type;
    this.viewable = ctx.viewable;
    this.category = ctx.parent;
    this.categoryId = ctx.parentId;
    this.guildId = ctx.guildId;
    this.url = `https://discord.com/channels/${ctx.guildId}/${ctx.id}`;
    this.mention = `<#${ctx.id}>`;
    this.topic = ctx.topic;


    // stuff
    /*
    this.guild = pend( async () => await guilds.get(ctx.guildId), `<Guild:${ctx.guildId}>` );
    this.flags = ctx.flags;
    this.partial = ctx.partial;
    this.permissionOverwrites = ctx.permissionOverwrites;
    this.permissionsLocked = ctx.permissionsLocked;
    this.position = ctx.position;
    this.rateLimitPerUser = ctx.rateLimitPerUser;
    this.rawPosition = ctx.rawPosition;
    this.threads // await channels.threads(ctx);
    */

    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
        lastPin: new Timestamp(ctx.lastPinAt)
    }
    


    // booleans
    this.deleteable = ctx.deleteable;


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

});
