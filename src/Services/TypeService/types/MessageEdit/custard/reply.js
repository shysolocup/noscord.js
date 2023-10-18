const MessageEdit = require('../index.js');


MessageEdit.newF("reply", function(/**/) { return (async () => {
    const client = this.parent.parent;
    client.import("app", "types", "components");
    
    let msg = this.raw;
    let args = Array.from(arguments);
    let settings = {};

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = args[0].toString();
    }
    else {
        settings = args[0];
    }

    let reply = new types.Message();
    await reply.apply( await msg.reply(settings) );

    if (settings.deleteAfter) await reply.delete(settings.deleteAfter);

    return reply;
    
})(); });
