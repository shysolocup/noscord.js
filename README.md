---

<br>

<a href="https://github.com/paigeroid/noscord.js"><img height=95 src="https://github.com/paigeroid/noscord.js/blob/main/assets/noscord.js%20logo.png" alt="N⦿SCORD.JS">

<a href="https://www.npmjs.com/package/noscord.js"><img height=22 src="https://img.shields.io/npm/v/noscord.js?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/noscord.js"><img height=22 src="https://img.shields.io/npm/dt/noscord.js?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://www.npmjs.com/package/discord.js"><img height=22 src="https://img.shields.io/badge/powered by-Discord.JS-blue?style=flat&color=5539cc&logo=discord&logoColor=white" alt="discord.js" />
<a href="https://github.com/paigeroid/noscord.js/wiki"><img height=22 src="https://img.shields.io/badge/documentation-blue?style=flat&color=darkblue&logo=github&logoColor=white" alt="documentation" />
<img height=22 src="https://github.com/paigeroid/noscord.js/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

- noscord.JS is a customized Discord API for Node.JS that is similar to older versions of Discord.JS in that you can access most of the API from the client instead of having to go through types though because it's built on the latest versions of Discord.JS you can still use them if you wish<br><br>

- It contains a plethora of services letting you more easily access parts of the API from the tips of your fingers<br><br>

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
const client = new Client(/* stuff */);



// runs when the bot logs in
client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});



// imports stuff
client.import(
    { com: "commands", comp: "components", att: "attachments" },
    [ "channels", "users", "events", "app" ]
);



// creates a new event called pingCmd
let event = events.create();
client.events.push("pingCmd", event);



// creates a listener for the pingCmd event
client.on("pingCmd", async (ctx, cmd) => {
    let channel = await channels.get("channel id");
    channel.send(`${cmd.name} command ran by ${ctx.author} in guild ${ctx.guild.name} (${ctx.guild.id})`);
});



// creates a ping command
com.create("ping", "replies with pong", (ctx, cmd) => {
    let timestamp = new app.Timestamp();


    let embed = new comp.Embed({
        description: "# Pong!",
        timestamp: timestamp.embed,
        color: app.colors.blurple,
        footer: `latency: ${Date.now() - ctx.timestamps.created}ms`
    });

    
    ctx.reply({ embeds: [embed] });
    event.fire(ctx, cmd);
});



// options for the avatar command
let options = [{
    name: "user",
    description: "user to get the avatar of",
    type: "user",
    required: false
}];



// avatar command
com.create("avatar", "sends a users' avatar", options, async (ctx, cmd) => {
    let user;


    if (cmd.args[0]) user = await users.get(cmd.args[0].value);
    else user = ctx.author;


    let { png } = await users.avatar(user, { width: 100, height: 100 });
    let circle = await att.circlify(png);


    ctx.reply({ files: [circle] });
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
