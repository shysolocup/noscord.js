const Store = require('../Store.js');


Store.newF("json", async function(name, messageId) {
    const client = this.parent.parent;
    client.import('util');

    let storeName = this.storeName;
    let guildId = this.guildId;

    const channel = await this.shandle(name);

    const ctx = (messageId) ? 
        await channel.messages.fetch(messageId) : 
        
        ( Array.from( (await channel.messages.fetch()) .values()) )
        .filter( msg => msg.attachments && msg.attachments.size > 0 )[0];
    
    if (!ctx) return ret;

    let link = ctx.attachments.first().url;

    let data = await fetch(link, { method: "Get" } );
    return await data.json();
});
