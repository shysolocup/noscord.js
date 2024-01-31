const StageChannel = require('../index.js');


StageChannel.newF("delete", function(...args) {
    const client = this.parent.parent;
    client.import("channels");
    let channel = this.raw;
    
    return channels.delete(channel, ...args);
});
