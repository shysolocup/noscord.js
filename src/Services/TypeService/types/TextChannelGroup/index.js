const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');

const pend = require('pender');


TypeService.newC("TextChannelGroup", class extends Soup {
    constructor(guild) {
        super(Object);

        const client = this.parent.parent;
        client.import("channels");

        client._base.channels
        
        .fetch()
        .catch(e=>{})
        .then( stuff => {
            stuff = Soup.from(stuff);
            stuff.forEach( (id, base) => {
                if (guild && base.guildId != guild.id) return;
                if (base.type == 0) this.push(id, pend( () => channels.get(id, guild), `<#${id}>` ))
            });
        });
    }
});


module.exports = TextChannelGroup;
