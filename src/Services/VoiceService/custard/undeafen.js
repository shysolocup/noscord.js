const VoiceService = require('../index.js');


VoiceService.newF("undeafen", async function(user, guild) {
    let channel = await this.find(user, guild);

    if (channel.members.has(user.id)) {
        let vcUser = ((channel.raw) ? channel.raw : channel) .members.get(user.id);
        vcUser.voice.setDeaf(false);
        return vcUser;
    }
})
