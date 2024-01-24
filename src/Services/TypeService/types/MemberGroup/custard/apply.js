const { Soup } = require('stews');
const MemberGroup = require('../index.js');
const pend = require('pender');


MemberGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "users");

    let stuff  = new Soup(Object);
    let names = new Soup(Object);
    let bots = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = gList.values[i];
            let list = await guild.members.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await guild.raw.members.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }


    stuff.forEach( (id, base) => {
        bots.push(id, base.user.bot)
        names.push(id, base.user.username);
        this.push(id, pend( () => users.get(id, guild), `<@${id}>` ))
    });


    Object.defineProperties(this, {
        users: {
            get: () => {
                return this.filter( (id) => !bots[id] );
            }
        },

        bots: {
            get: () => {
                return this.filter( (id) => bots[id] );
            }
        },

        named: {
            value: (name) => {
                return this.filter( (id) => names[id] == name );
            }
        }
    })
})
