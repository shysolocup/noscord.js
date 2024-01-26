const { Soup } = require('stews');
const MemberGroup = require('../index.js');
const pend = require('pender');

const { Noodle } = require('stews');


MemberGroup.newF("apply", async function(guild, category=null) {
    const client = this.parent.parent;
    client.import("guilds", "users");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);

    if (category) {
        stuff = Soup.from( ((category.raw) ? category.raw : category) .members );
    }
    else if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = gList.values[i];
            let list = await ((guild.raw) ? guild.raw : guild) .members.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await ((guild.raw) ? guild.raw : guild) .members.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }


    stuff.forEach( (id, base) => {
        bases.push(id, base);
        this.push(id, pend( () => users.get(id, guild), `<@${id}>` ))
    });


    Object.defineProperties(this, {
        usernames: { get: () => this.map( id => bases[id].user.username ) },
        nicknames: { get: () => this.map( id => { let name = bases[id].displayName; return (name) ? name : bases[id].user.username } ) },
        
        users: { get: () => this.filter( id => !bases[id].user.bot ) },
        bots: { get: () => this.filter( id => bases[id].user.bot ) },
        
        named: { value: (name) => this.filter( id => bases[id].user.username == name ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].user.username)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].user.username)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].user.username)).endsWith(...args) ) },
    })
})
