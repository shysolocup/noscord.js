const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("categoryCount", async function(guild=null) {
    return new Soup( await ( (guild) ? guild.raw.channels : this.parent._base.channels)
        .fetch()
        .catch(e=>{})
    )
		.filter( (id, channel) => { return channel.type == 4; })
		.length;
});
