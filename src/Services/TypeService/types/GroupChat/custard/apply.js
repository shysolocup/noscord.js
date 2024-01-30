const GroupChat = require('../index.js');
const pend = require('pender');


GroupChat.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "util", "types");

    // information
    let base = new types.BaseChannel;
	await base.apply(ctx);

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

	
	// function forking
	let pd = Soup.from(Object.getOwnPropertyDescriptors(ctx.__proto__));
    pd = pd.merge( Soup.from(Object.getOwnPropertyDescriptors(ctx.__proto__.__proto__)) );

    let basepd = Soup.from( Object.getOwnPropertyDescriptors(ctx.__proto__.__proto__.__proto__));

    for ( [ prop, data ] of basepd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value) data.value = data.value.bind(ctx);
            else if (data.get) data.get = data.get.bind(ctx);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }

    for ( [ prop, data ] of pd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(ctx);
            else if (data.get) data.get = data.get.bind(ctx);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
	
});
