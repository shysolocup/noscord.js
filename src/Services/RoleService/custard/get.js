const RoleService = require('../index.js');


RoleService.newF("get", async function(id, guild=null) {
	const client = this.parent;
	client.import("types");
	
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<@&') && raw.endsWith('>')) {
        raw = raw.slice(3, -1);
    }
    
    raw = raw.split("").join(""); 
    
    let thing = await ( 
		(guild) ? 
			((guild.raw) ? guild.raw : guild) .roles : // if guild is given it gets from the guild
		
			this.parent._base.roles // if a guild is not given it gets from the client's channels
		
	).fetch(raw).catch(e=>{});

    let typed = new types.Role;
	if (thing && typed) await typed.apply(thing);
 
    return (!thing || !typed) ? null : typed;
});
