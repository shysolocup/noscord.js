const RoleService = require('../index.js');


RoleService.newF("get", async function(id) {
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<@&') && raw.endsWith('>')) {
        raw = raw.slice(3, -1);
    }
    
    raw = raw.split("").join(""); 
    
    let thing = await this.parent.shit.roles.fetch(raw).catch(e=>{});
    
    return (!thing) ? null : thing;
});
