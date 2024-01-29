const { Soup } = require('stews');
const GuildGroup = require('../index.js');
const pend = require('pender');


GuildGroup.newF("apply", async function() {
    const client = this.parent.parent;
    client.import("guilds", "types");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);

    let gList = Soup.from( await client._base.guilds.fetch() );
    
    for ( let [id, base] of gList ) {
        base = await base.fetch();
        bases.push(id, base);
        let guild = new types.Guild;
        this.push(id, pend( async () => {
            
            await guild.apply(base);
            return guild;
            
        }, `<${id}>` ));
    }

    Object.defineProperties(this, {
        names: { get: () => this.map( id => bases[id].name ) },
        named: { value: (name) => this.filter( (id) => bases[id].name == name ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).endsWith(...args) ) },
    })
})
