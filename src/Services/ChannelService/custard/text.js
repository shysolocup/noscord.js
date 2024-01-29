const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("text", async function(guild=null) {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.ChannelGroup;
	await group.apply(guild);

    return group.text;
});
