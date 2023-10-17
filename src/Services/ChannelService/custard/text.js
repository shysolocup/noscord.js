const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("text", async function(guild=null) {
    return new Soup( await ( (guild) ? guild.channels : this.parent._base.channels)
        .fetch()
        .catch(e=>{})
    )
		.filter( (id, channel) => { return channel.type == 0; })
		.pour();
});
