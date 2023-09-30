const GuildService = require('../index.js');


GuildService.newF("get", async function(id) {
    if (!id) return null; 
    
    let raw = id; 
    
    let thing = await this.parent.shit.guilds.fetch(raw).catch(e=>{});
    
    return (!thing) ? null : thing;
});
