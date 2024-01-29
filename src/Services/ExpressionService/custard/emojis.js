const ExpressionService = require('../index.js');
const { Soup } = require('stews');


ExpressionService.newF("emojis", async function(guild) {
    const client = this.parent;
    client.import("types");
    
    let stuff = Soup.from(await ((guild.raw) ? guild.raw : guild) .emojis.fetch())
    for (let [id, raw] of stuff) {
        let thing = new types.Emoji;
        await thing.apply(raw);

        stuff.set(id, thing);
    }

    return stuff;
});
