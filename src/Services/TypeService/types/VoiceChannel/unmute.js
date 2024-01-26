const VoiceChannel = require('../index.js');


VoiceChannel.newF("unmute", function(user) {
    const client = this.parent.parent;
    client.import("voice");
    
    return voice.unmute(user, this.guild);
});
