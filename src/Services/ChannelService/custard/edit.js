const ChannelService = require('../index.js');


ChannelService.newF("edit", async function(channel, settings={}, reason) {
    const client = this.parent;
    client.import("channels");

    if ( (settings.desc || settings.description) && !settings.topic ) {
        settings.topic = (settings.desc) ? settings.desc : settings.description;
    }

    if ( (settings.slowmode) && !settings.rateLimitPerUser ) {
        settings.rateLimitPerUser = settings.slowmode;
    }

    if ( settings.category || settings.parent ) {
        let ctg = (settings.category) 
            ? ((c = settings.category) => ((c.raw) ? c.raw : c) )() 
            : ((c = settings.parent) => ((c.raw) ? c.raw : c) )() 
        
        settings.parent = ctg;
    }

    let data = (channel.raw) ? channel.raw : channel;

    let edit = new types.VictimChannel;
    await edit.apply( await data.edit(settings).catch(e=>{}) );
    return edit;
});
