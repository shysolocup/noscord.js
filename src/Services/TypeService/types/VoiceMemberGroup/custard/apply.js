const { Soup } = require('stews');
const VoiceMemberGroup = require('../index.js');
const pend = require('pender');


VoiceMemberGroup.newF("apply", async function(channel) {
    const client = this.parent.parent;
    client.import("guilds", "users");

    let stuff = new Soup(channel.members);
    let bases = new Soup(Object);


    stuff.forEach( (id, base) => {
        bases.push(id, base);
        this.push(id, pend( async () => {
            let guild = await guilds.get(ctx.guildId);
            return await users.get(id, guild), `<@${id}>` 
        }, `<@${id}>`))
    });


    Object.defineProperties(this, {
        users: { get: () => this.filter( (id) => !bases[id].user.bot ) },
        bots: { get: () => this.filter( (id) => bases[id].user.bot ) },
        named: { value: (name) => this.filter( (id) => bases[id].username == name ) }
    })
});
