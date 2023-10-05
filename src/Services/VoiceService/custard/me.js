const VoiceService = require('../index.js');
const { Soup } = require('stews');


VoiceService.newF("me", async function(user, guild=null) {
    const client = this.parent.parent;
    const gs = new client.GuildService);
    const cs = new client.ChannelService;

    const guilds = Soup.from(gs.list());
    let channels = new Soup(Object);

    if (!guild) {
        for (let i = 0; i < guilds.length; i++) {
            guild = guilds.entries[i][1];
    
            let channel = await this.find(client.user, guild);
    
            if (channel) channels.push(guild.id, channel);
        }

        channels = channels.pour();
    }

    else {
        channels = await this.find(client.user, guild);
    }

    return channels;
})
