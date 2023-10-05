const ExpressionService = require('../index.js');


ExpressionService.newF("emojiList", async function(guild) {
    return Soup.from(await guild.emojis.fetch()).pour();
});
