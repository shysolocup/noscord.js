const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("list", async function() {
    return await this.parent.shit.channels.fetch().catch(e=>{});
});
