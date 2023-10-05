const VoiceService = require('../index.js');


VoiceService.newF("unmute", async function(user, guild) {
    let channel = await this.find(user, guild);

    if (channel.members.has(user.id)) {
        let vcUser = channel.members.get(user.id);
        vcUser.voice.setMute(false);
        return vcUser;
    }
})
