const MessageService = require('../index.js');


MessageService.newF("send", async function(...args) {
    const client = this.parent;
    client.import("app", "types", "components");
    
    let channel = args.shift();
    let settings = {};

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = args[0].toString();
    }
    else {
        settings = args[0];
    }

    settings.files = [];

    let msg = new types.Message();
    await msg.apply( await channel.send(settings).catch(e=>{}) );

    if (settings.deleteAfter) await msg.delete(settings.deleteAfter);

    return msg;
});
