const UserService = require('../index.js');


UserService.newF("get", async function(id, guild=null) {
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<@') && raw.endsWith('>')) {
        raw = raw.slice(2, -1);
    }
    
    raw = raw.split("").join(""); 
    
    let thing = await ( 
		(guild) ? guild.users.fetch(raw).catch(e=>{}) : 
		this.parent.shit.users.fetch(raw).catch(e=>{})
	);
    
    return (!thing) ? null : thing;
});
