const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("list", async function(guild=null) {
    let users = new Soup( await ( (guild) ? guild.members : this.parent.shit.users)
        .fetch()
        .catch(e=>{})
    );

	
	for (let i = 0; i < users.length; i++) {
		users[i] = await this.get(users.keys[i]);
	}
	

	return users
		.pour();
});
