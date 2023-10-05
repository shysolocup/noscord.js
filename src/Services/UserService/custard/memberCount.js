const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("memberCount", async function(guild) {
    let users = Soup.from(await this.members(guild));
    return users.length;
});
