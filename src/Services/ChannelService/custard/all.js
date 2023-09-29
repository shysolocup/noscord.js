const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("all", async function() {
    return Soup.from(await this.parent.shit.channels.fetch().catch(e=>{}));
});
