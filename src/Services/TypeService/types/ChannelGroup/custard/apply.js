const { Soup } = require('stews');
const ChannelGroup = require('../index.js');
const pend = require('pender');


ChannelGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "channels");

    let stuff  = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = await guilds.get( gList.keys[i] );
            let chList = await guild.raw.channels.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(chList));
        }
    }
    else {
        let chList = await guild.raw.channels.fetch().catch(e=>console.log(e))
        stuff = Soup.from(chList);
    }


    stuff.forEach( (id, base) => {
        if (guild && base.guildId != guild.id) return;
        this.push(id, pend( () => channels.get(id, guild), `<#${id}>` ))
    });
})
