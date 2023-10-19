const MessageService = require('../index.js');


MessageService.newF("delete", async function(msg, after=0) {
    const client = this.parent;
    client.import("app");
    msg = await this.get(msg.id, msg.channel);

    setTimeout( () => {
        msg.delete().catch(e=>{});
    }, app.parse(after)*1000 );

    return this;
});
