const { Soup } = require('stews');
const GuildMemberGroup = require('../index.js');
const pend = require('pender');


GuildMemberGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "users");

    let stuff  = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = await guilds.get( gList.keys[i] );
            let list = await guild.raw.members.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await guild.raw.members.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }


    stuff.forEach( (id, base) => {
        if (guild && base.guildId != guild.id) return;
        this.push(id, pend( () => users.get(id, guild), `<@${id}>` ))
    });
})
