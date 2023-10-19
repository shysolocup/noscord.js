const Message = require('../index.js');


Message.newF("delete", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let msg = this.raw;
    
    return messages.delete(msg, ...args);
});
