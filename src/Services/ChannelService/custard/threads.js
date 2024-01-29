const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("threads", async function(guild=null) {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.ChannelGroup;
	await group.apply(guild);

    return group.threads;
});
