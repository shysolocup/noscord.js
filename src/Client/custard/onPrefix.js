const { Client } = require('../index.js');


Client.newF("onPrefix", function(a, b) {
	if (b && b instanceof Function) {
		this.on("prefixCommandRan", async (ctx, cmd) => {
			if (ctx.name == a) await b(ctx, cmd);
		});
	}
	else {
		this.on("prefixCommandRan", a);
	}
});
