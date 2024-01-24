const ChannelGroup = require('../index.js');
const pend = require('pender');


ChannelGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "channels");

    let chList = await guild.raw.channels.fetch().catch(e=>console.log(e))
    
    stuff = Soup.from(chList);
    stuff.forEach( (id, base) => {
        if (guild && base.guildId != guild.id) return;
        this.push(id, pend( () => channels.get(id, guild), `<#${id}>` ))
    });
})
