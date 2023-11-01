const GuildService = require('../index.js');


GuildService.newF("get", async function(id) {
    let client = this.parent;
    client.import("types");
    
    if (!id) return null; 
    
    let raw = id; 
    
    let thing = await this.parent._base.guilds.fetch(raw).catch(e=>{});
    let typed = new types.Guild();

    if (thing) await typed.apply(thing);
    
    return (!thing) ? null : typed;
});
