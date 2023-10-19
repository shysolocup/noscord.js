const GuildService = require('../index.js');


GuildService.newF("has", async function(id) {
	let thing = await this.get(id);
    return !!thing;
});
