const GuildService = require('../index.js');
const { Soup } = require('stews');


GuildService.newF("list", async function() {
    let guilds = Soup.from(await this.parent.shit.guilds.fetch().catch(e=>{}));
	
	for (let i = 0; i < guilds.length; i++) {
		guilds[i] = await this.get(guilds.keys[i]);
	};

	return guilds.pour();
});
