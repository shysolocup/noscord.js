const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("emojis", async function(guild) {
    return Soup.from(await guild.emojis.fetch()).pour();
});
