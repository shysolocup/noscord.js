const RoleService = require('../index.js');


RoleService.newF("list", async function(guild) {
    return Soup.from(await guild.roles.fetch()).pour();
});
