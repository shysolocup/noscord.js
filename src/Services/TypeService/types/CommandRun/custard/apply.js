const CommandRun = require('../index.js');


CommandRun.newF("apply", async function(ctx, cmd) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "app");
    
    this.raw = ctx;
});
