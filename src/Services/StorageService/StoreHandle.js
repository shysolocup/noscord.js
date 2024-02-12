var { ChannelType, PermissionFlagsBits } = require('discord.js');


module.exports = (guild, categoryId) => async function StoreHandle(name) {
    let channel = guild.channels.cache.find( channel => channel.name == name );

    if (!channel) {
        channel = await guild.channels.create({
            name: name,
            type: ChannelType.GuildText,
            reason: `new noscord.js guild store`,
            parent: categoryId,

            permissionOverwrites: [{
                id: guild.roles.everyone.id,
                deny: [ PermissionFlagsBits.ViewChannel ]
            }]
        });
    }

    return channel;
}
