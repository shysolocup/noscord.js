const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("stickers", async function(guild) {
    const client = this.parent;
    client.import("types");
    
    let stuff = Soup.from(await ((guild.raw) ? guild.raw : guild) .stickers.fetch())
    for (let [id, raw] of stuff) {
        let thing = new types.Sticker;
        await thing.apply(raw);

        stuff.set(id, thing);
    }

    return stuff;
});
