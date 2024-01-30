const Category = require('../index.js');
const pend = require('pender');


Category.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util", "types");

	
    // information
    let base = new types.BaseChannel;
	await base.apply(ctx);

	Object.assign(this, base);
	
	this.children = ctx.children;

    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});
	
	// groups
	this.groups = pend( async () => {
        let stuff = new Soup({
            members: new types.MemberGroup,
            channels: new types.ChannelGroup,
        });

        for (let i = 0; i < stuff.length; i++) {
            await stuff.values[i].apply(ctx.guild, ctx);
        }

        stuff.channels = stuff.channels.inCategory(ctx.id);

        return stuff
    }, "ChildGroups" );


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
