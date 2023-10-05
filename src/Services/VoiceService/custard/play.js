const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');
const { Soup } = require('stews');


VoiceService.newF("play", async function(audioDir, guild=null) {
    
    // gets channels the bot is in
    let me = Soup.from(await this.me(guild));

    
    // stuff
    let resource = voice.createAudioResource(audioDir);
    let player = voice.createAudioPlayer();


    // plays the audio
    player.play(resource);


    // adds channels included
    me.forEach( (id, channel) => {
        let connection = this.get(channel); 
        connection.subscribe(channel);
    })
});
