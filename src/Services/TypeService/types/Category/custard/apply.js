const Category = require('../index.js');
const pend = require('pender');


Category.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util", "types");

	
    // information
    let base = new types.BaseChannel;
	base.apply(ctx);

	Object.assign(this, base);

	
	this.children = ctx.children;

	
	// groups
	this.groups = pend( async () => {
        let stuff = new Soup({
            members: new types.MemberGroup(),
            channels: new types.ChannelGroup(),
        });

        for (let i = 0; i < stuff.length; i++) {
            await stuff.values[i].apply(this.guild, ctx);
        }

        return stuff
    }, "ChildGroups" );

	
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

});
