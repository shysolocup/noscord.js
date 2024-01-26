const VoiceChannel = require('../index.js');


VoiceChannel.newF("join", function() {
    const client = this.parent.parent;
    client.import("voice");
    
    return voice.join(this);
});
