const MessageService = require('../index.js');


MessageService.newF("followUp", async function(...args) {
    const client = this.parent;
    client.import("app", "types", "components", "messages");
    
    let cmd = args.shift();
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

    let flw = new types.Message();
    await flw.apply( await cmd.followUp(settings).catch(e=>{}) );

    if (settings.deleteAfter) await flw.delete(settings.deleteAfter);

    return flw;
});
