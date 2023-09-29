# WumpCli
WumpCli is a customized Discord.JS API that uses a more service-based approach to creating discord bots
```js
const { Client } = require('wumpcli');
const client = new Client(/* stuff */);


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


const { Command } = client.CommandService;
const { Event } = client.EventService;


let event = new Event();
client.events.push("pingCmd", event);


client.on("pingCmd", (ctx) => {
    console.log(`ping command ran (${ctx.id})`);
});


new Command({ name: "ping", desc: "replies with pong" }, (ctx) => {
    ctx.reply("pong!");
    event.fire(ctx);
});


client.login(token);
```
