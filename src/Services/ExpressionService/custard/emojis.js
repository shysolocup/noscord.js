const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("emojis", async function(guild) {
    return Soup.from(await ((guild.raw) ? guild.raw : guild) .emojis.fetch()).pour();
});
