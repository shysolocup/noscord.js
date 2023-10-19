const MessageEdit = require('../index.js');


MessageEdit.newF("delete", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let msg = this.raw;
    
    return messages.delete(msg, ...args);
});
