const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("categories", async function() {
    return Soup.from(await this.parent.shit.channels
        .fetch()
        .catch(e=>{})
    )
    .filter( (id, channel) => { return channel.type == 4; });
});
