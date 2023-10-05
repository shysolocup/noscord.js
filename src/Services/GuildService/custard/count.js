const GuildService = require('../index.js');
const { Soup } = require('stews');


GuildService.newF("count", async function() {
    return Soup.from(await this.list()).length;
});
