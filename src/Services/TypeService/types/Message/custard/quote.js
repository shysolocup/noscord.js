const Message = require('../index.js');


Message.newF("quote", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let msg = this.raw;
    
    return messages.quote(msg, ...args);
});
