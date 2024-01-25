const GroupChat = require('../index.js');
const pend = require('pender');


GroupChat.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "util", "types");

    // information
    let base = new types.BaseChannel;
	base.apply(ctx);

	Object.assign(this, base);


    // messages
    this.messages = ctx.messages;
    this.msgList // = await messages.list(ctx);
    this.lastMsg // = await messages.get(ctx.lastMessageId);
    this.lastMsgId = ctx.lastMessageId;


    // times
    this.timestamps.lastPin = new Timestamp(ctx.lastPinAt)


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

});
