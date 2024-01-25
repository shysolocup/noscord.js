const VoiceState = require('../index.js');


VoiceState.newF("apply", async function(ctx, ctx2=null) {
    const client = this.parent.parent;
    client.import("guilds", "channels", "users", "util");

    // guild
    this.guild = await guilds.get(ctx.guild.id);
    this.guildId = ctx.guild.id;

    // channel
    this.channel = await channels.get(ctx.channelId);
    this.channelId = ctx.channelId;

    // user
    this.user = await users.get(ctx.id)
    this.userId = ctx.id;
    this.id = ctx.id;


    // booleans
	this.joining = (ctx2) ? !!(!ctx.channelID && ctx2.channelId) : false;
	this.leaving = (ctx2) ? !!(!ctx.channelID && ctx2.channelId) : false;
	this.moving = (ctx2) ? !!(!(!ctx.channelId && ctx2.channelId) && !(!ctx2.channelId && ctx.channelId)) : false;
    this.muted = !!ctx.selfMute;
    this.deafened = !!ctx.selfDeaf;
    this.video = !!ctx.selfVideo;
    this.streaming = !!ctx.streaming
    this.serverDeafened = !!ctx.serverDeaf;
    this.serverMuted = !!ctx.serverMute;

    // stuff
    this.sessionId = ctx.sessionId;
    this.suppress = ctx.suppress;

    // times
    this.requestToSpeakTimestamp = ctx.requestToSpeakTimestamp;
    
    if (this.raw) return;
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});
});
