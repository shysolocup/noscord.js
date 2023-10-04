const Message = require('../index.js');


Message.newF("reply", function() { (async (/**/) => {
    const client = this.client;
    const app = new client.AppService;
    
    let msg = this.raw;
    let args = Array.from(this.arguments);
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

    return await msg.reply(settings);
})(); });
