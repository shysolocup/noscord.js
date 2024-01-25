const VoiceChannel = require('../index.js');
const pend = require('pender');


VoiceChannel.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util", "types");

    // information
    let base = new types.BaseChannel;
	base.apply(ctx);

	Object.assign(this, base);
	

    // stuff
	this.members = new types.VoiceChannelGroup;
    this.guild = await guilds.get(ctx.guildId);
	this.guildId = ctx.guildId;
    this.flags = ctx.flags;
    this.partial = ctx.partial;
    this.permissionOverwrites = ctx.permissionOverwrites;
    this.permissionsLocked = ctx.permissionsLocked;
    this.position = ctx.position;
    this.rateLimitPerUser = ctx.rateLimitPerUser;
    this.rawPosition = ctx.rawPosition;
    // this.threads // await channels.threads(ctx);


    // messages
    // this.messages = ctx.messages;
    // this.msgList // = await messages.list(ctx);
    // this.lastMsg // = await messages.get(ctx.lastMessageId);
    // this.lastMsgId = ctx.lastMessageId;


    // times
    // this.timestamps.lastPin = new Timestamp(ctx.lastPinAt)


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

	await this.members.apply(ctx);

});
