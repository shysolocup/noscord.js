const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');
const { Soup } = require('stews');


VoiceService.newF("play", async function(settings) {
    
    // gets channels the bot is in
    let me = Soup.from(await this.me(settings.guild));

    
    // stuff
    let resource = voice.createAudioResource(settings.audio, settings.audioSettings);
    let player = (settings.player) ? settings.player : voice.createAudioPlayer(settings.playerSettings);


    // plays the audio
    player.play(resource);


    // adds channels included
    me.forEach( (id, channel) => {
        let connection = this.get(channel); 
        connection.subscribe(channel);
    });

    
    return player;
});
