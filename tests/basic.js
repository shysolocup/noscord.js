const { main } = require('../package.json');
const { Client } = require(`../${main}`);
const { token } = require('./config.json');

const client = new Client();
client.import("util");

console.log(util);

client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);

    console.log(util.emojis);
});


client.on('messageCreate', (ctx) => {
    console.log(ctx);
})


client.login(token);