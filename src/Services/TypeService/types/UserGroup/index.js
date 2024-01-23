const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');

const pender = require('pender');


TypeService.newC("UserGroup", class extends Soup {
    constructor(guild) {
        super(Object);

        const client = this.parent.parent;
        client.import("users");

        ( (guild) ? guild.raw.members : client._base.users )
        
        .fetch()
        .catch(e=>{})
        .then( (members) => {
            members = Soup.from(members);
            members.forEach( (id, base) => this.push(id, pend( () => users.get(id, guild), `<@${id}>` )));
        });
    }
});


module.exports = UserGroup;
