const Message = require('../index.js');


Message.newF("reply", function(/**/) { return (async () => {
    const client = this.parent.parent;
    const app = new client.AppService;
    const types = new client.TypeService;
    
    let msg = this.raw;
    let args = Array.from(arguments);
    let settings;

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = args[0].toString();
    }
    else {
        settings = {};
        settings.content = args[0];
    }

    if (settings.deleteAfter) {
        setTimeout( () => {
                msg.delete().catch(e=>{});
        }, app.parse(settings.deleteAfter) );
    }

    let reply = new types.MessageReply();
    await reply.apply( await msg.reply(settings) );

    return reply;
    
})(); });
