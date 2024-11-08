const djsvoice = require('@discordjs/voice');
const Sound = require('../index.js');


Sound.newF("play", async function(channel) {
    const client = this.parent.parent;
    client.import("channels");

    this.playing = true;
    this.paused = false;

    channel = (typeof channel == "string") ? await channels.get(channel) : channel

    let id = channel.guild.id;
    let connection = djsvoice.getVoiceConnection(id);
    
    this.connections.push(id, connection);
    connection.subscribe(this.player);

    this.player.play(this.audio);
    this.voiceservice.playing.push(this);

    await this.events.played.fire(this, channel);
});