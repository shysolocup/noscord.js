[stupid thing]: <> (hopefully this should fix the problem with npm)

# NOSCORD.JS | Alpha

<a href="https://www.npmjs.com/package/noscord.js"><img src="https://img.shields.io/npm/v/noscord.js?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/noscord.js"><img src="https://img.shields.io/npm/dt/noscord.js?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<img src="https://github.com/paigeroid/noscord.js/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

NOSCORD.JS is a customized Discord.JS API that uses a more service-based system to creating discord bots. <br><br>

there are multiple services that you can require into your scripts that makes development easier such as slash commands, components, events, etc.

<br>

```console
npm i noscord.js
```
```console
npm i paigeroid/noscord.js
```

<br>

```js
const { Client } = require('noscord.js');
const client = new Client(/* stuff */);


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


new client.EventService; // imports the event service for creating events
let cmd = new client.CommandService; // imports the command service for creating slash commands
let channels = new client.ChannelService; // imports the channel service


let event = new Event();
client.events.push("pingCmd", event);


client.on("pingCmd", async (ctx) => {
    let channel = await channels.get("channel id");
    channel.send(`ping command ran by ${ctx.author} in guild ${ctx.guild.name} (${ctx.guild.id})`);
});


cmd.create("ping", "replies with pong", (ctx) => {
    ctx.reply("pong!");
    event.fire(ctx);
});


client.login(token);
```

<br><br>

## Collaborators

<table>
    
  <tr>
    <td align="center"><a href="https://github.com/paigeroid"><img src="https://avatars.githubusercontent.com/u/88659700?v=4?s=100" width="100px;" alt="me"/><br /><sub><b>paigeroid</b></sub></a><br/>
    <td align="center"><a href="https://github.com/RockyRosso"><img src="https://avatars.githubusercontent.com/u/79947006?v=4?s=100" width="100px;" alt="rocky"/><br /><sub><b>RockyRosso</b></sub></a><br/>
    <td align="center"><a href="https://github.com/polish-penguin-dev"><img src="https://avatars.githubusercontent.com/u/74113025?v=4?s=100" width="100px;" alt="penguins"/><br /><sub><b>penguin dev</b></sub></a><br/>
</td>
    
      
</table>
