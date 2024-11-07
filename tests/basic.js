const { main } = require('../package.json');
const { Client } = require(`../${main}`);
const { token } = require('./config.json');

const client = new Client({
    "prefix": "."
});

client.import("util", "comp");


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


client.prefixCommand("test", (ctx) => {
    let query = ctx.args.join("_");
    let emojis = ctx.args.length > 0 ? (util.emojis.filter( n => n.includes(query))) : util.emojis

    let emoji = emojis.random.choice();

    if (emoji) {
        let embed = new comp.Embed({
            body: `# ${emoji[1]}`,
            footer: `of ${emojis.length}\ other in query`,
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