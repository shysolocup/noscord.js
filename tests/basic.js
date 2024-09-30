const { main } = require('../package.json');
const { Client } = require(`../${main}`);

const client = new Client();

client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});