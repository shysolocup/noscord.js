const { Soup } = require('stews');
const EmojiGroup = require('../index.js');
const pend = require('pender');


EmojiGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "types");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let [id, guild] of gList ) {
            guild = await guild.fetch();
            let list = await guild.emojis.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await guild.raw.emojis.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }


    stuff.forEach( (id, base) => {
        bases.push(id, base);
        let emoji = new types.Emoji;
        this.push(id, pend( async () => {
            
            await emoji.apply(base);
            return emoji;
            
        }, `<:${base.name}:${id}>` ));
    });

    Object.defineProperties(this, {
        names: { get: () => this.map( id => bases[id].name ) },
        
        static: { get: () => this.filter( (id) => !bases[id].animated ) },
        animated: { get: () => this.filter( (id) => bases[id].animated ) },
        
        named: { value: (name) => this.filter( (id) => bases[id].name == name ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).endsWith(...args) ) },
    })
})
