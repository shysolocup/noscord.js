const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("emojiCount", async function(guild) {
    return Soup.from(await this.emojis(guild)).length;
});
