const { Soup } = require('stews');
const MemberGroup = require('../index.js');
const pend = require('pender');


MemberGroup.newF("apply", async function(guild, category=null) {
    const client = this.parent.parent;
    client.import("guilds", "users");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);

    if (category) {
        let list = await ((category.raw) ? category.raw : category) .members.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
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
        users: { get: () => this.filter( (id) => !bases[id].user.bot ) },
        bots: { get: () => this.filter( (id) => bases[id].user.bot ) },
        named: { value: (name) => this.filter( (id) => bases[id].username == name ) }
    })
})
