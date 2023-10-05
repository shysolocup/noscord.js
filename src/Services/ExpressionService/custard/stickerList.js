const ExpressionService = require('../index.js');


ExpressionService.newF("emojiList", async function(guild) {
    return Soup.from(await guild.stickers.fetch()).pour();
});
