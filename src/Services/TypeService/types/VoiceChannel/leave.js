const VoiceChannel = require('../index.js');


VoiceChannel.newF("leave", function() {
    const client = this.parent.parent;
    client.import("voice");
    
    return voice.leave(this);
});
