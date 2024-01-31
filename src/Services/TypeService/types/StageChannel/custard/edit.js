const StageChannel = require('../index.js');


StageChannel.newF("edit", function(...args) {
    const client = this.parent.parent;
    client.import("channels");
    let channel = this.raw;
    
    return channels.edit(channel, ...args);
});
