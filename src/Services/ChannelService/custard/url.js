const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("url", function(channel) {
    return `https://discord.com/channels/${channel.guild.id}/${channel.id}`
});
