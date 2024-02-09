const ChannelService = require('../index.js');


ChannelService.newF("get", async function(id, guild=null) {
	const client = this.parent;
	client.import("types");
	
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<#') && raw.endsWith('>')) {
        raw = raw.slice(2, -1);
    }
    
    raw = raw.split("").join(""); 
    
    let thing = await ( 
		(guild) ? 
			((guild.raw) ? guild.raw : guild) .channels : // if guild is given it gets from the guild
		
			this.parent._base.channels // if a guild is not given it gets from the client's channels
		
	).fetch(raw).catch(e=>{});

	if (!thing) return null;
    let typed = this.typer(thing.type);

	if (thing && typed) await typed.apply(thing);
 
    return (!thing || !typed) ? null : typed;
});
