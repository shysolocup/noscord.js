const UserService = require('../index.js');
const { Soup } = require('stews');


UserService.newF("memberCount", async function(guild) {
    return Soup.from(await this.members(guild)).length;
});
