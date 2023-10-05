const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');


VoiceService.newF("leave", function(channel) {
    const connection = voice.getVoiceConnection(channel.guild.id);
	try { connection.destroy(); } catch(err) {}
})
