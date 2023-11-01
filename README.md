---

<br>

<a href="https://github.com/paigeroid/noscord.js"><img height=95 src="https://github.com/paigeroid/noscord.js/blob/main/assets/noscord.js%20logo.png" alt="N⦿SCORD.JS">

<a href="https://www.npmjs.com/package/noscord.js"><img height=22 src="https://img.shields.io/npm/v/noscord.js?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/noscord.js"><img height=22 src="https://img.shields.io/npm/dt/noscord.js?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://www.npmjs.com/package/discord.js"><img height=22 src="https://img.shields.io/badge/powered by-Discord.JS-blue?style=flat&color=5539cc&logo=discord&logoColor=white" alt="discord.js" />
<a href="https://github.com/paigeroid/noscord.js/wiki"><img height=22 src="https://img.shields.io/badge/documentation-blue?style=flat&color=black&logo=github&logoColor=white" alt="documentation" />
<img height=22 src="https://github.com/paigeroid/noscord.js/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

noscord.JS is a customized Discord API wrapper for Node.JS that is similar to older versions of Discord.JS letting you access most of the API from the client using an importing system.<br>

It's built on the latest versions of Discord.JS so it has all the new features AND the simpler setup.<br><br>


- A TON of bug fixes
- Built in commands
- Fully open source
- Modding support
- Updated events
- Better guides


<br>


⚠️ __PLEASE NOTE:__
this package is currently in active development and is far from finished ⚠️ 

<br>

```console
npm i noscord.js
```
```console
npm i paigeroid/noscord.js
```

<br>

--- 

<br><br>

```js
const { Client } = require('noscord.js');
const client = new Client();



// runs when the bot logs in
client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});



// imports stuff
// also components adds Embeds and util adds Timestamp
client.import(
    { com: "commands", comp: "components", att: "attachments" },
    [ "channels", "users", "events", "util" ]
);



// creates a new event called pingCmd
let event = events.create();
client.events.push("pingCmd", event);



// creates a listener for the pingCmd event
client.on("pingCmd", async (ctx) => {
    let channel = await channels.get("channel id");
    channel.send(`${ctx.name} command ran by ${ctx.author} in guild ${ctx.guild.name} (${ctx.guild.id})`);
});



// listens for when a command goes on cooldown
client.on("cooldown", async (ctx) => {
    ctx.reply(`You can use this command again in ${ctx.cooldown.remaining} seconds`);
});



// creates a ping command
com.create("ping", "replies with pong", "5s", (ctx) => {
    if (ctx.onCooldown) return;

    let timestamp = new Timestamp();

    let embed = new Embed({
        header: { text: "Pong!", size: 1 },
        timestamp: timestamp.embed,
        color: util.colors.blurple,
        footer: `latency: ${timestamp.latency(ctx)}ms`
    });
    
    ctx.reply({ embeds: [embed] });
    event.fire(ctx, cmd);
});



// option for the avatar command
let options = [{ name: "user", desc: "user to get the avatar of", type: "user" }];



// avatar command
com.create("avatar", "sends a user's avatar", options, "5s", async (ctx) => {
    if (ctx.onCooldown) return

    let user = (ctx.args[0]) ? await users.get(ctx.args[0].value) : ctx.author;

    let avatar = await users.avatar(user, { width: 200, height: 200 });

    ctx.reply({ files: [avatar] });
});



// logs into the bot
client.login(token);
```

<br>

## Disclaimer
this project is created out of love for Discord development<br>
this project and the developers behind it are:
- not associated with Discord or Discord.JS
- not responsible for anything created using the API

<br><br>

## Collaborators

<table>
    
  <tr>
    <td align="center"><a href="https://github.com/paigeroid"><img src="https://avatars.githubusercontent.com/u/88659700?v=4?s=100" width="100px;" alt="me"/><br /><sub><b>paigeroid</b></sub></a><br/>
    <td align="center"><a href="https://github.com/RockyRosso"><img src="https://avatars.githubusercontent.com/u/79947006?v=4?s=100" width="100px;" alt="rocky"/><br /><sub><b>RockyRosso</b></sub></a><br/>
    <td align="center"><a href="https://github.com/polish-penguin-dev"><img src="https://avatars.githubusercontent.com/u/74113025?v=4?s=100" width="100px;" alt="penguins"/><br /><sub><b>penguin dev</b></sub></a><br/>
</td>
    
      
</table>
