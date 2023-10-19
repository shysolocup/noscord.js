const MessageService = require('../index.js');


MessageService.newF("reply", async function(...args) {
    const client = this.parent;
    client.import("app", "types", "components");
    
    let msg = args.shift();
    msg = await this.get(msg.id, msg.channel);
    let settings = {};

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = args[0].toString();
    }
    else {
        settings = args[0];
    }

    settings.files = [];

    let reply = new types.Message();
    await reply.apply( await msg.reply(settings).catch(e=>{}) );

    if (settings.deleteAfter) await reply.delete(settings.deleteAfter);

    return reply;
});
