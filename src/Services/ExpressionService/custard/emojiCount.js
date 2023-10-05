const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("emojiCount", async function(guild) {
    return Soup.from(await guild.emojis.fetch()).length;
});
