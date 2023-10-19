const MessageService = require('../index.js');


MessageService.newF("delete", async function(msg, settings={}) {
    const client = this.parent;
    client.import("app");

    if (settings.after) {
        setTimeout( () => {
            msg.delete().catch(e=>{});
        }, app.parseMs(settings.after) );
    }

    return this;
});
