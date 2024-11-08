const { main } = require('../package.json');
const { Client, Presets } = require(`../${main}`);
const { token } = require('./config.json');

const client = new Client({
    "prefix": ".",
    intents: Presets.all
});

client.import("voice", "util", "comp", "types", "instance");


client.on("ready", async (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


client.on("soundPlayed", async (sound) => {
    console.log("should be playing");
})


client.prefixCommand("vctest", async function(ctx) {
    let vc = await ctx.member.voice.channel;

    if (!vc) return ctx.reply("join a vc so I can join you please");
    
    voice.join(vc);

    await voice.play("./pdiddy_with_fur.mp3", vc)
});


client.prefixCommand("test", (ctx) => {
    let query = ctx.args.join("_");
    let emojis = ctx.args.length > 0 ? (util.emojis.filter( n => n.includes(query))) : util.emojis

    let emoji = emojis.random.choice();

    if (emoji) {
        let embed = new comp.Embed({
            body: `# ${emoji[1]}`,
            footer: `of ${emojis.length}\ other in query | latency: ${ctx.latency}ms`,
            color: util.colors.blurple
        });

        ctx.reply({
            embeds: [ embed ]
        });
    }
    else {
        ctx.reply('no emojis found');
    }
})


client.login(token);