const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("all", async function() {
    return Soup.from(await this.parent._base.channels.fetch().catch(e=>{}));
});
