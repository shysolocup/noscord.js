const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("voice", async function(guild=null) {
    const client = this.parent;
    client.import("instance");
    
   	let group = await instance.new("ChannelGroup", guild);

    return group.voice;
});
