const ChannelService = require('../index.js');


ChannelService.newF("has", async function(id) {
	let thing = await this.get(id);
    return !!thing;
});
