const { AttachmentBuilder } = require('discord.js');
const Store = require('../Store.js');


Store.newF("post", async function(name, postData) {
    const client = this.parent.parent;
    client.import('util');

    let storeName = this.storeName;
    let guildId = this.guildId;

    const ret = {
        id: null,
        newData: null,
        oldData: null,
        storeName: storeName,
        guildId: guildId
    }

    const channel = await this.shandle(name);
    const { id, data } = await this.get(name);

    ret.newData = postData;
    ret.oldData = data;

    if (JSON.stringify(data) == JSON.stringify(postData)) {
        ret.id = id;
        return ret;
    }

    var att = new AttachmentBuilder(Buffer.from(`${ JSON.stringify(postData, null, 4) }`, 'utf-8'), {
        name: `GuildStorePost://${name}/${util.genCode(9)}.json` 
    });
    
    let ctx = await channel.send({ files: [att] });
    ret.id = ctx.id;

    // await client.events.(ret, this);

    return ret;
})
