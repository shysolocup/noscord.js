const Message = require('../index.js');


Message.newF("edit", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let msg = this.raw;
    
    return messages.edit(msg, ...args);
});
