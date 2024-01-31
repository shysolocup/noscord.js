const MessageService = require('../index.js');


MessageService.newF("quote", async function(...args) {
    const client = this.parent;
    client.import("util", "types", "components", "messages");

    let msg = args.shift();
    let settings = {};

    let user = (msg.author) ? msg.author : (msg.member) ? msg.member : null

    function format(text) {
        return `${msg.content.replace(/(?:\r\n|\r|\n)/g, "\n> ")}\n${ (user) ? `<@${user.id}> ` : "" }`;
    }

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = format(args[0].toString());
    }
    else {
        settings = (args[0] instanceof Object) ? args[0] : format(args[0].toString());
    }

    if (settings.files) {
        settings.files = settings.files.map( (file) => {
            if (file instanceof types.Attachment) return file.png;
            else return file;
        });
    }

    let channel = ((msg.raw) ? msg.raw : msg) .channel;

    let quote = new types.Message();
    await quote.apply( await channel.send(settings).catch(e=>{}) );

    if (settings.deleteAfter) await quote.delete(settings.deleteAfter);

    return quote;
});
