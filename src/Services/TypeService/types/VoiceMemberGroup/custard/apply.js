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
        usernames: { get: () => this.map( id => bases[id].user.username ) },
        nicknames: { get: () => this.map( id => { let name = bases[id].displayName; return (name) ? name : bases[id].user.username } ) },
        
        users: { get: () => this.filter( (id) => !bases[id].user.bot ) },
        bots: { get: () => this.filter( (id) => bases[id].user.bot ) },
        
        named: { value: (name) => this.filter( id => bases[id].user.username == name ) },
        nicknamed: { value: (name) => this.filter( id => bases[id].displayName == name ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].user.username)).has(...args) ) },
        nicksWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].displayName)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].user.username)).startsWith(...args) ) },
        nicksStartingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].displayName)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].user.username)).endsWith(...args) ) },
        nicksEndingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].displayName)).endsWith(...args) ) },
    })
});
