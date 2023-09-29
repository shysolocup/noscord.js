const ChannelService = require('../index.js');


ChannelService.newF("get", async function(id) {
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<#') && raw.endsWith('>')) {
        raw = raw.slice(2, -1);
    } 
    
    raw = raw.split("").join(""); 
    
    let thing = await this.parent.shit.channels.fetch(raw).catch(e=>{});
    
    return (!thing) ? null : new this.Channel(thing);
});
