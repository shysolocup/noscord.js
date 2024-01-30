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

	
	await this.members.apply(ctx);

});
