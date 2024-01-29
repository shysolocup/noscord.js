const Role = require('../index.js');


Role.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "util");
    
    // ids
    this.id = ctx.id;
    this.mention = `<@&${ctx.id}>`


    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
    };
    this.createdAt = ctx.createdAt;

    
    if (this.raw) return;
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});
});
