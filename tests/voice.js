const { main } = require('../package.json');
const { Client } = require(`../${main}`);
const { token } = require('./config.json');

const client = new Client({
    "prefix": "."
});

client.import("voice");


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


let sound = new voice.Sound()


client.prefixCommand("test", function() {

})


client.login(token);