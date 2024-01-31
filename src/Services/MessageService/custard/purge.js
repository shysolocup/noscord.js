const MessageService = require('../index.js');


MessageService.newF("purge", async function(amount, channel) {
    const client = this.parent;
    client.import("types");
    
    let data = (channel.raw) ? channel.raw : channel;

    let messages = new types.SelectMessageGroup;
    await messages.apply( await data.bulkDelete(amount) );

    return messages;
});
