const VoiceService = require('../index.js');


VoiceService.newF("find", async function(user, guild) {
    const client = this.parent;
    client.import('channels');
    
    let vcs = await channels.voice( (guild.raw) ? guild.raw : guild );
    
    for (let i = 0; i < vcs.length; i++) {
        let channel = await vcs[i];
        if (channel.raw.members.has(user.id)) return channel;
    }
    return null;
})
