const { main } = require('../package.json');
const { Client } = require(`../${main}`);
const { token } = require('./config.json');

const client = new Client();
client.import("util");


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


client.onPriority(0, 'messageCreate', (ctx) => {
    console.log('a');
})

client.onPriority(1, 'messageCreate', (ctx) => {
    console.log('b');
})


client.login(token);