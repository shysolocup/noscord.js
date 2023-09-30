const MessageService = require('../index.js');


MessageService.newF("get", async function(id, channel) {
    if (!id || !channel) return null;
    
    let thing = await channel.messages.fetch(id).catch(e=>{});
    
    return (!thing) ? null : thing;
});
