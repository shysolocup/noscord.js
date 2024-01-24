const PrefixCommandRun = require('../index.js');
const { Soup } = require('stews');

PrefixCommandRun.newF("apply", async function(ctx, cmd={}) {
    const client = this.parent.parent;
    client.import("types");

    // command info
    this.name = cmd.name;
    this.aliases = cmd.aliases;
    this.cooldown = cmd.cooldown;
    this.onCooldown = cmd.onCooldown;
    this.userCooldown = (cmd.cooldown) ? cmd.cooldown.get(ctx.author.id) : undefined
    this.args = cmd.args;
    this.data = cmd.data;

    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

    const msg = new types.Message;
    await msg.apply(ctx);

    Object.assign(this, msg);
});
