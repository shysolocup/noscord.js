const RoleService = require('../index.js');


RoleService.newF("get", async function(id, guild) {
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<@&') && raw.endsWith('>')) {
        raw = raw.slice(3, -1);
    }
    
    raw = raw.split("").join(""); 
    
    let thing = await ((guild.raw) ? guild.raw : guild) .roles.fetch(raw).catch(e=>{});
    
    return (!thing) ? null : thing;
});
