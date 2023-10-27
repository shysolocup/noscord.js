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
		(guild) ? guild.members.fetch(raw).catch(e=>{}) : 
		this.parent._base.users.fetch(raw).catch(e=>{})
	);

	let typed = (guild) ? new types.GuildMember : new types.User;
	if (thing) typed.apply(thing);
 
    return (!thing) ? null : typed;
});
