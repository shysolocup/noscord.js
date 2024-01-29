const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("users", async function(guild=null) {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.MemberGroup;
	await group.apply(guild);

    return group.users;
});
