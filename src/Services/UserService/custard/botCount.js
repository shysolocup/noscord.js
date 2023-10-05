const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("botCount", async function(guild) {
    let users = Soup.from(await this.bots(guild));
    return users.length;
});
