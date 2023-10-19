const ChannelService = require('../index.js');


ChannelService.newF("has", async function(id, guild=null) {
	let thing = await this.get(id, guild);
    return !!thing;
});
