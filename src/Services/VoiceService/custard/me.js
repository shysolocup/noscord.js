const VoiceService = require('../index.js');
const { Soup } = require('stews');


VoiceService.newF("me", async function(user) {
    const client = this.parent.parent;
    const gs = new client.GuildService);
    const cs = new client.ChannelService;

    const guilds = Soup.from(gs.list());
    let channels = new Soup(Object);

    for (let i = 0; i < guilds.length; i++) {
        let [id, guild] = guilds.entries[i];

        let channel = await this.find(client.user, guild);

        if (channel) channels.push(guild.id, channel);
    }

    return channels.pour();
})
