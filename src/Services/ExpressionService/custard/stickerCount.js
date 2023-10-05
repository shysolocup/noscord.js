const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("stickerCount", async function(guild) {
    return Soup.from(await guild.stickers.fetch()).length;
});
