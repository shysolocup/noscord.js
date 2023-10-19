const MessageService = require('../index.js');


MessageService.newF("has", async function(id, channel) {
	let thing = await this.get(id, channel);
    return !!thing;
});
