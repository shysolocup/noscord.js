const User = require('../index.js');


User.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users");

    // ids
    this.id = ctx.id;
    this.username = ctx.username;
    this.tag = (ctx.tag.endsWith("#0")) ? ctx.username : ctx.tag;
    this.bot = false;


    // avatar
    this.avatar = await users.avatar(ctx);
    this.avatarUrl = await users.avatarUrl(ctx);

    
    this.raw = ctx;
});
