const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("textCount", async function(guild=null) {
    return new Soup( await ( (guild) ? ((guild.raw) ? guild.raw : guild) .channels : this.parent._base.channels)
        .fetch()
        .catch(e=>{})
    )
		.filter( (id, channel) => { return channel.type == 0; })
		.length;
});
