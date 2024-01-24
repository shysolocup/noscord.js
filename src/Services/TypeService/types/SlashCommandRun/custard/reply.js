const SlashCommandRun = require('../index.js');


SlashCommandRun.newF("reply", function(...args) {
    const client = this.parent.parent;
    client.import("messages");
    let run = this.raw;
    
    return messages.reply(run, ...args);
});
