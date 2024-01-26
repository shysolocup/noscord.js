const VoiceChannel = require('../index.js');
const pend = require('pender');


VoiceChannel.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util", "types");

    // information
    let base = new types.BaseChannel;
	await base.apply(ctx);

	Object.assign(this, base);

    // stuff
	this.members = new types.VoiceMemberGroup;

    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

	await this.members.apply(ctx);

});
