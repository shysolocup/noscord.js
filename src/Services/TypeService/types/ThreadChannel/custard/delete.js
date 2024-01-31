const ThreadChannel = require('../index.js');


ThreadChannel.newF("delete", function(...args) {
    const client = this.parent.parent;
    client.import("channels");
    let channel = this.raw;
    
    return channels.delete(channel, ...args);
});
