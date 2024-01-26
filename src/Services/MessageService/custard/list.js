const MessageService = require('../index.js');


MessageService.newF("list", async function(channel, limit=100) {
    return Soup.from(await ((channel.raw) ? channel.raw : channel) .messages.fetch({ limit: limit })).pour();
});
