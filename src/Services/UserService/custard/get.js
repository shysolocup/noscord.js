const UserService = require('../index.js');


UserService.newF("get", async function(id, guild=null) {
	const client = this.parent;
	client.import("types");
	
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<@') && raw.endsWith('>')) {
        raw = raw.slice(2, -1);
    }
    
    raw = raw.split("").join(""); 
    
    let thing = await ( 
		(guild) ? 
			guild.raw.members : // if guild is given it gets from the guild
		
			this.parent._base.users // if a guild is not given it gets from the client's users
		
	).fetch(raw).catch(e=>{});

	let typed = (guild) ? new types.GuildMember : new types.User;
	if (thing) await typed.apply(thing);
 
    return (!thing) ? null : typed;
});
