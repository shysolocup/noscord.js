const MessageService = require('../index.js');


MessageService.newF("delete", async function(msg, settings={}) {
    const client = this.parent;
    client.import("util");

    if (!settings.after) settings.after = 0;

    setTimeout( () => {
        ((msg.raw) ? msg.raw : msg) .delete().catch(e=>{});
    }, util.parseMs(settings.after) );

    return msg;
});
