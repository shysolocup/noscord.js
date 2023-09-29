# WumpCli
WumpCli is a customized Discord.JS API that uses a more service-based approach to creating discord bots
```js
const { Client } = require('wumpcli');
const client = new Client(token);

client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


const { Command } = { CommandService } = client;


new Command({ name: "ping", description: "replies with pong" }, (ctx) => {
    ctx.reply("pong!");
});


client.login();
```
