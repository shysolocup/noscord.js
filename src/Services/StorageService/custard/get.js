const Store = require('../Store.js');


Store.newF("get", async function(name, messageId) {
    const client = this.parent.parent;
    client.import('util');

    let storeName = this.storeName;
    let guildId = this.guildId;

    const ret = {
        id: null,
        data: null,
        storeName: storeName,
        guildId: guildId
    }

    const channel = await this.shandle(name);

    const ctx = (messageId) ? 
        await channel.messages.fetch(messageId) : 
        
        ( Array.from( (await channel.messages.fetch()) .values()) )
        .filter( msg => msg.attachments && msg.attachments.size > 0 ) [0];
    
    if (!ctx) return ret;

    let link = ctx.attachments.first().url;

    let data = await fetch(link, { method: "Get" } );
    let json = await data.json();

    ret.data = json;
    ret.id = ctx.id;

    // await this.events.get.fire(ret, this);

    return ret;
})
