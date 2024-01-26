const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');


VoiceService.newF("leave", function(channel) {
    const connection = voice.getVoiceConnection(channel.guildId);
	try { connection.destroy(); } catch(err) {}
	return connection;
})
