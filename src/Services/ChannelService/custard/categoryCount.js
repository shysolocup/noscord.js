const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("categoryCount", async function(guild=null) {
    return (await this.categories()).length;
});
