const ChannelService = require('../index.js');


ChannelService.newF("get", async function(id) {
    if (!id) return null; 
    
    let rawChannel = id; 
    
    if (rawChannel.startsWith('<#') && rawChannel.endsWith('>')) {
        rawChannel = rawChannel.slice(2, -1);
    } 
    
    rawChannel = rawChannel.split("").join(""); 
    
    let channel = await this.parent.shit.channels.fetch(rawChannel).catch(e=>{});
    
    return (!channel) ? null : new this.Channel(channel);
});
