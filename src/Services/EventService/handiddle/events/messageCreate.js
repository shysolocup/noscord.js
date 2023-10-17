const EventHandler = require('./index.js');


EventHandler.init("messageCreate", (/**/) => {
    let types = this.types;
    let msg = new types.Message;
    
    msg.apply(...Array.from(arguments));

    return msg
});
