const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');


VoiceService.newF("find", async function(user, guild) {
    const client = this.parent.parent;
    const channels = new client.ChannelService;
    
    let vcs = await channels.voice(guild);
    
    for (let i = 0; i < vcs.length; i++) {
        let channel = vcs[i];

        if (channel.members.has(user.id)) return channel;
    }
    return null;
})
