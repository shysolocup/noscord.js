const MessageEdit = require('../index.js');


MessageEdit.newF("edit", function(/**/) { return (async () => {
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
        settings = args[0];
    }

    let edit = new types.MessageEdit();
    await edit.apply( await msg.edit(settings) );

    if (settings.deleteAfter) await edit.delete(settings.deleteAfter);

    return edit;
    
})(); });
