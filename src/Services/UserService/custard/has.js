const UserService = require('../index.js');


UserService.newF("get", async function(id, guild=null) {
	let thing = await this.get(id, guild);
    return !!thing;
});
