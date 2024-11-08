const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');


VoiceService.newF("getSound", function(dir) {
    return this.sounds.filter( s => s.dir == dir )[0]
})
