const Store = require('../Store.js');


Store.newF("revert", async function(name, messageId) {
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

    let getted = await this.get(name, messageId);
    
    let { newData, oldData, id } = await this.post( getted.data );
    [ ret.newData, ret.oldData, ret.id ] = [ newData, oldData, id ];

    // await this.events.revert.fire(ret, this);

    return ret;
})
