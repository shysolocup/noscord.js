const Store = require('../Store.js');


Store.newF("delete", async function(name) {
    const channel = await this.shandle(name);
    channel.delete();
});
