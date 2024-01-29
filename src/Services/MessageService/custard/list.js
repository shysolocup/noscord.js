const MessageService = require('../index.js');
const { Soup } = require('stews');


MessageService.newF("list", async function(channel) {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.MessageGroup;
	await group.apply(channel);

    return group;
});
