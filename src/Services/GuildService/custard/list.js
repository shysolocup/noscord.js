const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("list", async function() {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.GuildGroup;
	await group.apply(guild);

    return group;
});
