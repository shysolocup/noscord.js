const Store = require('../Store.js');


Store.newF("json", async function(name, messageId) {
    const client = this.parent.parent;
    client.import('util');

    let storeName = this.storeName;
    let guildId = this.guildId;

    const channel = await this.shandle(name);

    const ctx = (messageId) ? await channel.messages.fetch(messageId) : (await channel.messages.fetch()).first();
    if (!ctx) return ret;

    let link = ctx.attachments.first().url;

    let data = await fetch(link, { method: "Get" } );
    return await data.json();
});
