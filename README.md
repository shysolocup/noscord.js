# WumpCli
WumpCli is a customized Discord.JS API that uses a more service-based approach to creating discord bots similar to how Roblox Studio uses services
```js
const { Client } = require('wumpcli');
const client = new Client(/* stuff */);


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


new client.CommandService;
new client.EventService;


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

<br><br>

## Developers

<table>
    
  <tr>
    <td align="center"><a href="https://github.com/paigeroid"><img src="https://avatars.githubusercontent.com/u/88659700?v=4?s=100" width="100px;" alt=""/><br /><sub><b>paigeroid</b></sub></a><br/>
    <td align="center"><a href="https://github.com/polish-penguin-dev"><img src="https://avatars.githubusercontent.com/u/74113025?v=4?s=100" width="100px;" alt=""/><br /><sub><b>penguin dev</b></sub></a><br/>
</td>
    
      
</table>
