const { Client } = require('../index.js');


Client.newF("onPress", function(a, b) { ( async () => {
	if (b && b instanceof Function) {
		this.on("buttonPress", async (ctx) => {
			if (ctx.id == a) await b(ctx);
		});
	}
	else {
		this.on("buttonPress", a);
	}
})()});
