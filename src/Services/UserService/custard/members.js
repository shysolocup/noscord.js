const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("members", async function(guild=null) {
    let users = new Soup( await ( (guild) ? guild.raw.members : this.parent._base.users)
        .fetch()
        .catch(e=>{})
    );

	
	for (let i = 0; i < users.length; i++) {
		users[i] = await this.get(users.keys[i]);
	}
	

	return users
		.filter( (id, user) => { return !user.bot })
		.pour();
});
