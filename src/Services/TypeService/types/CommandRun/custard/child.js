const CommandRun = require('../index.js');


CommandRun.newP("child", async function() {
    const client = this.parent.parent;
    client.import("messages");
    
    let msg = await this.raw.fetchReply();

    return messages.get(msg.id, this.channel);
});
