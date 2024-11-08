const { Soup } = require('stews');


VoiceService.newF("play", async function(audio, channel, settings) {
    const client = this.parent;
    client.import("types", "instance");

    const Sound = types.Sound;

    if (audio instanceof Sound) {
        audio.settings = (settings) ? settings : audio.settings;
        audio.play(guild);
    }
    else {
        let sound = await instance.new("Sound", audio, settings);
        await sound.play(channel);
    }
});
