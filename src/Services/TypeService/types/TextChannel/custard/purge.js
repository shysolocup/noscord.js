const TextChannel = require('../index.js');


TextChannel.newF("purge", function(amount) {
    const client = this.parent.parent;
    client.import("messages");
    let channel = this.raw;
    
    return messages.purge(amount, channel);
});
