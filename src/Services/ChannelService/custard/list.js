const ChannelService = require('../index.js');


ChannelService.newF("list", async function(id) {
    return await this.parent.shit.channels.fetch().catch(e=>{});
});
