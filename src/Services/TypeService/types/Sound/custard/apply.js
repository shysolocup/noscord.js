const { Soup } = require('stews');
const Sound = require('../index.js');

const djsvoice = require('@discordjs/voice');


/*
    || CUSTOM SETTINGS ||


    player: audio player that it uses
    behaviors: audio player behaviors/settings
    metadata: audio resource data/settings

*/


Sound.newF("apply", async function(audio, settings) {
    const client = this.parent.parent;
    client.import("voice");


    this.settings = settings;
    this.dir = audio;

    
    this.playing = false;
    this.paused = false;
    this.dead = false;


    this.events = {
        'played': client.events.soundPlayed,
        'paused': client.events.soundPaused,
        'stopped': client.events.soundStopped
    };


    this.voiceservice = voice;


    this.audio = djsvoice.createAudioResource(audio, settings.metadata);
    this.player = (settings.player) ? settings.player : djsvoice.createAudioPlayer(settings.behaviors);


    voice.sounds.push(this);
    voice.players.push(this.player);
    voice.audiocache.push(this.audio);
});