const ExpressionService = require('../index.js');


ExpressionService.newF("getEmoji", async function(id, guild) {
	const client = this.parent;
	client.import("types");
	
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<:') && raw.endsWith('>')) {
        raw = raw.slice(2, -1);
    }
    
    raw = raw.split("").join("");

    let [ rawName, rawId ] = raw.split(":");
    
    let thing = await guild.raw.emojis
        .fetch(rawId).catch(e=>{});

	let typed = new types.Emoji
	if (thing) await typed.apply(thing);
 
    return (!thing) ? null : typed;
});
