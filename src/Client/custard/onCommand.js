const { Client } = require('../index.js');


Client.newF("onCommand", function(a, b) {
	if (b && b instanceof Function) {
		this.on("commandRan", async (ctx, cmd) => {
			if (ctx.name == a) await b(ctx, cmd);
		});
	}
	else {
		this.on("commandRan", a);
	}
});
