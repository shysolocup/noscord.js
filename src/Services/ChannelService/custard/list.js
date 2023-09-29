const ChannelService = require('../index.js');


ChannelService.newF("list", async function() {
    return await this.parent.shit.channels.fetch().catch(e=>{});
});
