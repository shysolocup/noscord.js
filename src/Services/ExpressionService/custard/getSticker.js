const ExpressionService = require('../index.js');


ExpressionService.newF("getSticker", async function(id, guild) {
	const client = this.parent;
	client.import("types");
	
    if (!id) return null; 
    
    let thing = await ((guild.raw) ? guild.raw : guild) .stickers
        .fetch(id).catch(e=>{});

	let typed = new types.Sticker
	if (thing) await typed.apply(thing);
 
    return (!thing) ? null : typed;
});
