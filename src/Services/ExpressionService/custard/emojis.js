const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("emojis", async function(guild) {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.EmojiGroup;
	await group.apply(guild);

    return group;
});
