const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("all", async function() {
    const client = this.parent;
    client.import("types", "channels");
    
    let stuff = Soup.from( await this.parent._base.channels.fetch())
    for (let [id, raw] of stuff) {
        let thing = channels.typer(raw.type);
        await thing.apply(raw);

        stuff.set(id, thing);
    }

    return stuff;
});
