const MessageService = require('../index.js');


MessageService.newF("edit", async function(...args) {
    const client = this.parent;
    client.import("app", "types", "components");
    
    let msg = args.shift();
    let settings = {};

    if (args[1] && args[1] instanceof Object) {
        settings = args[1];
        settings.content = args[0].toString();
    }
    else {
        settings = (args[0] instanceof Object) ? args[0] : args[0].toString();
    }

    let edit = new types.MessageEdit();
    await edit.apply( await msg.edit(settings).catch(e=>{}) );

    if (settings.deleteAfter) await edit.delete(settings.deleteAfter);

    return edit;
    
});
