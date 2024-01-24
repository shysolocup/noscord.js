const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("dms", async function() {
    return new Soup( await (this.parent._base.channels)
        .fetch()
        .catch(e=>{})
    )
		.filter( (id, channel) => { return channel.type == 1; })
		.pour();
});
