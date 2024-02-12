const { ChannelType, PermissionFlagsBits } = require('discord.js');
const { Client } = require('../../Client');
const { Soup } = require('stews');

Client.newC("StorageService", class {
    constructor() {
        this.stores = new Soup(Object);
    }
    
    async using(guildId) {
        const client = this.parent;
        client.import('util');

        let guild = await client._base.guilds.fetch(guildId);
        let storeName = `GuildStore://${client.user.id}`;

        let category = guild.channels.cache.find( channel => channel.name == storeName );

        if (!category) {
            category = await guild.channels.create({
                name: storeName,
                type: ChannelType.GuildCategory,
                reason: `new noscord.js guild storage`,

                permissionOverwrites: [{
                    id: guild.roles.everyone.id,
                    deny: [ PermissionFlagsBits.ViewChannel ]
                }]
            });
        }

        let shandle = require(`./StoreHandle.js`)(guild, category.id);

        return new this.Store(guildId, storeName, shandle);
    }
});

module.exports = StorageService;

require('./Store.js');
