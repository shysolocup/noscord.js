const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("stickers", async function(guild) {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.StickerGroup;
	await group.apply(guild);

    return group;
});
