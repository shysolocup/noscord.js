const RoleService = require('../index.js');
const { Soup } = require('stews');


RoleService.newF("list", async function(guild=null) {
    const client = this.parent;
    client.import("types");
    
   	let group = new types.RoleGroup;
	await group.apply(guild);

    return group;
});
