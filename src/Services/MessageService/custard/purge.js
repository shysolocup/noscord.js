const MessageService = require('../index.js');


MessageService.newF("purge", function(amount, channel) {
    let data = (channel.raw) ? channel.raw : channel;
    return data.bulkDelete(amount);
});
