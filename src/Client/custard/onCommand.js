const { Client } = require('../index.js');


Client.newF("onCommand", function(a, b) {
	if (b && b instanceof Function) {
		this.on("commandRun", async (ctx) => {
			if (ctx.name == a) await b(ctx);
		});
	}
	else {
		this.on("commandRun", a);
	}
});
