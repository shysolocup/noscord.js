const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("dms", async function() {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.ChannelGroup;
	await group.apply(guild);

    return group.dms;
});
