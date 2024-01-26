const VoiceChannel = require('../index.js');


VoiceChannel.newF("undeafen", function(user) {
    const client = this.parent.parent;
    client.import("voice");
    
    return voice.undeafen(user, this.guild);
});
