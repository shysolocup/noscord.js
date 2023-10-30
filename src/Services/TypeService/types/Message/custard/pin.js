const Message = require('../index.js');


Message.newF("pin", function() {
    const client = this.parent.parent;
    client.import("messages");
    let msg = this.raw;
    
    return messages.pin(msg);
});
