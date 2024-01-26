const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');


VoiceService.newF("join", function(channel) {
    return voice.joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guildId,
        adapterCreator: ((channel.guild.raw) ? channel.guild.raw : channel.guild) .voiceAdapterCreator
    });
})
