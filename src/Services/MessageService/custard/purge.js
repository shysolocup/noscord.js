const MessageService = require('../index.js');


MessageService.newF("purge", async function(amount, channel) {
    return channel.bulkDelete(amount);
});
