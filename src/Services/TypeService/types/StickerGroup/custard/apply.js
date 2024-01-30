const { Soup } = require('stews');
const StickerGroup = require('../index.js');
const pend = require('pender');


StickerGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "types");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = gList.values[i];
            let list = await guild.stickers.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await guild.raw.stickers.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }


    stuff.forEach( (id, base) => {
        bases.push(id, base);
        let stk = new types.Sticker;
        this.push(id, pend( async () => {
            
            await stk.apply(base);
            return stk;
            
        }, `<S:${id}>` ));
    });

    Object.defineProperties(this, {
        raw: { get: () => this.map( id => bases[id] ) },
        names: { get: () => this.map( id => bases[id].name ) },
        
        static: { get: () => this.filter( (id) => !bases[id].animated ) },
        animated: { get: () => this.filter( (id) => bases[id].animated ) },
        
        named: { value: (name) => this.filter( (id) => bases[id].name == name ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).endsWith(...args) ) },
    })
})
