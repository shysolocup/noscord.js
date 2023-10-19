const Message = require('../index.js');


Message.newF("reply", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let msg = this.raw;
    
    return messages.reply(msg, ...args);
});
