const GuildService = require('../index.js');
const { Soup } = require('stews');


GuildService.newF("list", async function() {
    return Soup.from(await this.parent.shit.guilds.fetch().catch(e=>{}));
});
