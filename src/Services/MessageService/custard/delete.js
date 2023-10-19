const MessageService = require('../index.js');


MessageService.newF("delete", async function(msg, settings={}) {
    const client = this.parent;
    client.import("app");

    if (!settings.after) settings.after = 0;

    setTimeout( () => {
        msg.delete().catch(e=>{});
    }, app.parseMs(settings.after) );

    return this;
});
