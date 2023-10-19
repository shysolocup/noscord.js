const TextChannel = require('../index.js');


TextChannel.newF("send", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let channel = this.raw;
    
    return messages.send(channel, ...args);
});
