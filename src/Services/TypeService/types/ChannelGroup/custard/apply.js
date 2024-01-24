const { Soup } = require('stews');
const ChannelGroup = require('../index.js');
const pend = require('pender');


ChannelGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "channels");

    let stuff  = new Soup(Object);
    let types = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = gList.values[i];
            let chList = await guild.channels.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(chList));
        }
    }
    else {
        let chList = await guild.raw.channels.fetch().catch(e=>console.log(e))
        stuff = Soup.from(chList);
    }


    stuff.forEach( (id, base) => {
        if (guild && base.guildId != guild.id) return;
        types.push(id, base.type);
        this.push(id, pend( () => channels.get(id, guild), `<#${id}>` ))
    });

    Object.defineProperties(this, {
        text: { get: () => this.filter( (id) => types[id] == 0 ) },
        voice: { get: () => this.filter( (id) => types[id] == 2 ) },
        categories: { get: () => this.filter( (id) => types[id] == 4 ) },
        threads: { get: () => this.filter( (id) => (types[id] == 11 || types[id] == 12) ) },
        publicThreads: { get: () => this.filter( (id) => types[id] == 11 ) },
        privateThreads: { get: () => this.filter( (id) => types[id] == 12 ) },
        stages: { get: () => this.filter( (id) => types[id] == 13 ) },
        forums: { get: () => this.filter( (id) => types[id] == 15 ) },
        media: { get: () => this.filter( (id) => types[id] == 16 ) },
    })
})
