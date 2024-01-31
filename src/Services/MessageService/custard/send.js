const MessageService = require('../index.js');


MessageService.newF("send", async function(...args) {
    const client = this.parent;
    client.import("util", "types", "components", "channels");
    
    let channel = args.shift();
    let settings = {};

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = args[0].toString();
    }
    else {
        settings = (args[0] instanceof Object) ? args[0] : args[0].toString();
    }

    if (settings.files) {
        settings.files = settings.files.map( (file) => {
            if (file instanceof types.Attachment) return file.png;
            else return file;
        });
    }

    let msg = new types.Message();
    await msg.apply( await ((channel.raw) ? channel.raw : channel) .send(settings).catch(e=>{}) );

    if (settings.deleteAfter) await ((msg.raw) ? msg.raw : msg) .delete(settings.deleteAfter);

    return msg;
});
