const Sound = require('../index.js');

Sound.newF("play", async function(guild) {
    this.playing = true;
    this.paused = false;

    let id = (typeof guild == "string") ? guild : guild.id
    let connection = voice.getVoiceConnection(id);

    player.play(this.audio);    
    this.voiceservice.playing.push(this);
    
    this.connections.push(id, connection);
    connection.subscribe(channel);

    await self.events.played.fire(this, channels);
});