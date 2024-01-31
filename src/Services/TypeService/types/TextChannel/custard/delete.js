const TextChannel = require('../index.js');


TextChannel.newF("delete", function(...args) {
    const client = this.parent.parent;
    client.import("channels");
    let channel = this.raw;
    
    return channels.delete(channel, ...args);
});
