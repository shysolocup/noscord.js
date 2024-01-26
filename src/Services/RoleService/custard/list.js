const RoleService = require('../index.js');


RoleService.newF("list", async function(guild) {
    return Soup.from(await ((guild.raw) ? guild.raw : guild) .roles.fetch()).pour();
});
