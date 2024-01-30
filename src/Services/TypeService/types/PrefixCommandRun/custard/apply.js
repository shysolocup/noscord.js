const PrefixCommandRun = require('../index.js');
const Message = require('../../Message');

PrefixCommandRun.newF("apply", async function(ctx, cmd={}) {
    const client = this.parent.parent;

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

    await Message.prototype.apply.bind(this)(ctx);

	this.client = client;
});
