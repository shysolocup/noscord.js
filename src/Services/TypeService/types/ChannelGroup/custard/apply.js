const { Soup } = require('stews');
const ChannelGroup = require('../index.js');
const pend = require('pender');


ChannelGroup.newF("apply", async function(guild, category=null) {
    const client = this.parent.parent;
    client.import("guilds", "channels");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);


    if (category) {
        let list = await ((category.raw) ? category.raw : category) .children.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }
    else if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = gList.values[i];
            let list = await ((guild.raw) ? guild.raw : guild) .channels.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await ((guild.raw) ? guild.raw : guild) .channels.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }


    stuff.forEach( (id, base) => {
        bases.push(id, base);
        this.push(id, pend( () => channels.get(id, guild), `<#${id}>` ))
    });

    
    Object.defineProperties(this, {
        text: { get: () => this.filter( (id) => bases[id].type == 0 ) },
        voice: { get: () => this.filter( (id) => bases[id].type == 2 ) },
        categories: { get: () => this.filter( (id) => bases[id].type == 4 ) },
        threads: { get: () => this.filter( (id) => (bases[id].type == 11 || bases[id].type == 12) ) },
        publicThreads: { get: () => this.filter( (id) => bases[id].type == 11 ) },
        privateThreads: { get: () => this.filter( (id) => bases[id].type == 12 ) },
        stages: { get: () => this.filter( (id) => bases[id].type == 13 ) },
        forums: { get: () => this.filter( (id) => bases[id].type == 15 ) },
        media: { get: () => this.filter( (id) => bases[id].type == 16 ) },

        named: { value: (name) => this.filter( (id) => bases[id].name == name ) }
    })
})
