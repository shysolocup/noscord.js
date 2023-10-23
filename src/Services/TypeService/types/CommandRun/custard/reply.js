const CommandRun = require('../index.js');


CommandRun.newF("reply", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let run = this.raw;
    
    return messages.reply(run, ...args);
});
