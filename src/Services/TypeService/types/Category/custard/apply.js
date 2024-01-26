const Category = require('../index.js');
const pend = require('pender');


Category.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util", "types");

    // information
    let base = new types.TextChannel;
	base.apply(ctx);

	Object.assign(this, base);

    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

});
