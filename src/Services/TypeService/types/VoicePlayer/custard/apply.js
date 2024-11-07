const { Soup } = require('stews');
const VoicePlayer = require('../index.js');
const pend = require('pender');

const djsvoice = require('@discordjs/voice');


VoicePlayer.newF("apply", async function(audio, settings) {
    const client = this.parent.parent;
    client.import("voice");

    self.events = {
        'played': client.events.audioPlayed,
        'paused': client.events.audioPaused,
        'stopped': client.events.audioStopped
    };

    self.voiceservice = voice;
    self.player = (settings.player) ? settings.player : djsvoice.createAudioPlayer(settings.behaviors);
});
