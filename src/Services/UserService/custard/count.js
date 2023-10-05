const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("count", async function(guild) {
    return Soup.from(await this.list(guild)).length;
});
