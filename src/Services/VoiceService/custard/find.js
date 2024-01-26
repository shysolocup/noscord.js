const VoiceService = require('../index.js');


VoiceService.newF("find", async function(user, guild) {
    const client = this.parent.parent;
    const channels = new client.ChannelService;
    
    let vcs = await channels.voice( (guild.raw) ? guild.raw : guild );
    
    for (let i = 0; i < vcs.length; i++) {
        let channel = vcs[i];

        if (channel.members.has(user.id)) return channel;
    }
    return null;
})
