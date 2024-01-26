const VoiceChannel = require('../index.js');


VoiceChannel.newF("deafen", function(user) {
    const client = this.parent.parent;
    client.import("voice");
    
    return voice.deafen(user, this.guild);
});
