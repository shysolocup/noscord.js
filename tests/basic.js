const { main } = require('../package.json');
const { Client } = require(`../${main}`);
const { token } = require('./config.json');

const client = new Client({
    "prefix": "."
});

client.import("util");


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


client.prefixCommand("test", (ctx) => {
    let emoji = util.emojis.random.choice();

    ctx.reply(emoji[1]);
})


client.login(token);