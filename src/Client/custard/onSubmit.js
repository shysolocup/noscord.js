const { Client } = require('../index.js');


Client.newF("onSubmit", function(a, b) { ( async () => {
	if (b && b instanceof Function) {
		this.on("selectSubmit", async (ctx) => {
			if (ctx.id == a) await b(ctx);
		});
	}
	else {
		this.on("selectSubmit", a);
	}
})()});
