const ThreadChannel = require('../index.js');
const pend = require('pender');


ThreadChannel.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util", "types");

    // information
    let base = new types.BaseChannel;
	await base.apply(ctx);

	Object.assign(this, base);


    // stuff
    /*this.flags = ctx.flags;
    this.partial = ctx.partial;
    this.permissionOverwrites = ctx.permissionOverwrites;
    this.permissionsLocked = ctx.permissionsLocked;
    this.position = ctx.position;
    this.rateLimitPerUser = ctx.rateLimitPerUser;
    this.rawPosition = ctx.rawPosition;
    this.threads // await channels.threads(ctx);*/


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

    for ( let [ prop, data ] of basepd ) {
        if (!this.__proto__[prop] && !this[prop]) {
            if (data.value) data.value = data.value.bind(ctx);
            else if (data.get) data.get = data.get.bind(ctx);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }

    for ( let [ prop, data ] of pd ) {
        if (!this.__proto__[prop] && !this[prop]) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(ctx);
            else if (data.get) data.get = data.get.bind(ctx);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
});
