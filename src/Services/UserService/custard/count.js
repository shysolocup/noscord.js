const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("count", async function(guild) {
    let users = Soup.from(await this.list(guild));
    return users.length;
});
