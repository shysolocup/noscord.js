const RoleService = require('../index.js');


RoleService.newF("count", async function(guild) {
    return Soup.from(await this.list(guild)).length;
});
