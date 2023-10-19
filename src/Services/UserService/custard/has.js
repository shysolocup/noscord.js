const UserService = require('../index.js');


UserService.newF("has", async function(id, guild=null) {
	let thing = await this.get(id, guild);
    return !!thing;
});
