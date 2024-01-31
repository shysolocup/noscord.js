const ChannelService = require('../index.js');


ChannelService.newF("delete", async function(channel, settings={}) {
    const client = this.parent;
    client.import("util");

    if (!settings.after) settings.after = 0;

    setTimeout( () => {
        ((channel.raw) ? channel.raw : channel) .delete().catch(e=>{});
    }, util.parseMs(settings.after) );

    return channel;
});
