const { Soup } = require('stews');
const RoleGroup = require('../index.js');
const pend = require('pender');


RoleGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "roles");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let [id, guild] of gList ) {
            guild = await guild.fetch();
            let list = await ((guild.raw) ? guild.raw : guild) .roles.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await ((guild.raw) ? guild.raw : guild) .roles.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }

    stuff.forEach( (id, base) => {
        bases.push(id, base);
        this.push(id, pend( () => roles.get(id, guild), `<#${id}>` ))
    });

    
    Object.defineProperties(this, {
        names: { get: () => this.map( id => bases[id].name ) },

        named: { value: (name) => this.filter( (id) => bases[id].name == name ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).endsWith(...args) ) },
    })
})
