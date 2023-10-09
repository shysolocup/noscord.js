const MessageService = require('../index.js');


MessageService.newF("purge", function(amount, channel) {
    return channel.bulkDelete(amount);
});
