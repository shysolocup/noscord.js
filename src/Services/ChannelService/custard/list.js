const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("list", async function(guild=null) {
    return new Soup( await ( (guild) ? guild.channels : this.parent._base.channels)
        .fetch()
        .catch(e=>{})
    )
		.filter( (id, channel) => { return channel.type != 4; })
		.pour();
});
