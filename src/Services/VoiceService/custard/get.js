const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');


VoiceService.newF("get", function(channel) {
    return voice.getVoiceConnection(channel.guildId);
})
