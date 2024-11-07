const { Soup } = require('stews');


VoiceService.newF("play", async function(audio, guild, settings) {
    const Sound = this.Sound;

    if (audio instanceof Sound) {
        audio.settings = (settings) ? settings : audio.settings;
        audio.play(guild);
    }
    else {
        let sound = new this.Sound(audio, settings);
        sound.play(guild);
    }
});
