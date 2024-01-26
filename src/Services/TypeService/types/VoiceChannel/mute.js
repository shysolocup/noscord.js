const VoiceChannel = require('../index.js');


VoiceChannel.newF("mute", function(user) {
    const client = this.parent.parent;
    client.import("voice");
    
    return voice.mute(user, this.guild);
});
