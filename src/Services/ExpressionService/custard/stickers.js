const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("stickers", async function(guild) {
    return Soup.from(await ((guild.raw) ? guild.raw : guild) .stickers.fetch()).pour();
});
