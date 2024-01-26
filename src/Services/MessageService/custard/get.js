const MessageService = require('../index.js');


MessageService.newF("get", async function(id, channel) {
    const types = new this.parent.TypeService;
    if (!id || !channel) return null;
    
    let thing = await ((channel.raw) ? channel.raw : channel) .messages.fetch(id).catch(e=>{});
    
    if (!thing) return;

    let msg = new types.Message();
    msg.apply(thing);

    return msg;
});
