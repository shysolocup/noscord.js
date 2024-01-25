const { Client } = require('../index.js');


Client.newF("onSlash", function(a, b) {
	if (b && b instanceof Function) {
		this.on("slashCommandRan", async (ctx, cmd) => {
			if (ctx.name == a) await b(ctx, cmd);
		});
	}
	else {
		this.on("slashCommandRan", a);
	}
});
