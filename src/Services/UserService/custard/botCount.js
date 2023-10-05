const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("botCount", async function(guild) {
    return Soup.from(await this.bots(guild)).length;
});
