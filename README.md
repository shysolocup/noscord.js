---

<br>

<a href="https://github.com/paishee/noscord.js"><img height=95 src="https://github.com/paishee/noscord.js/blob/main/assets/noscord.js%20logo.png" alt="N⦿SCORD.JS">

<a href="https://www.npmjs.com/package/noscord.js"><img height=22 src="https://img.shields.io/npm/v/noscord.js?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/noscord.js"><img height=22 src="https://img.shields.io/npm/dt/noscord.js?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://www.npmjs.com/package/discord.js"><img height=22 src="https://img.shields.io/badge/powered by-Discord.JS-blue?style=flat&color=5539cc&logo=discord&logoColor=white" alt="discord.js" />
<a href="https://github.com/paishee/noscord.js/wiki"><img height=22 src="https://img.shields.io/badge/documentation-blue?style=flat&color=black&logo=github&logoColor=white" alt="documentation" />
<img height=22 src="https://github.com/paishee/noscord.js/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

NOSCORD.JS is a customized Discord API wrapper for Node.JS that is similar to older versions of Discord.JS letting you access most of the API from the client using an importing system.<br>

It's built on the latest versions of Discord.JS so it has all the new features AND the simpler setup.<br><br>


- Built in command support
- Numerous Bug Fixes
- Fully open source
- Modding support
- Custom events


<br>


⚠️ __PLEASE NOTE:__
this package is currently in active development and is far from finished ⚠️ 

<br>

```console
npm i noscord.js
```
```console
npm i paishee/noscord.js
```

<br>

--- 

<br><br>

```js
const { Client } = require('noscord.js');
const client = new Client();



client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});



client.import("util", "components");



client.on("cooldown", async (ctx) => {
    ctx.reply(`You can use this command again in ${ctx.cooldown.remaining} seconds`);
});



com.create("ping", "replies with pong", "5s", (ctx) => {
    if (ctx.onCooldown) return;


    let embed = new Embed({
        header: { text: "Pong!", size: 1 },
        timestamp: ctx.timestamps.created,
        color: util.colors.blurple,
        footer: `latency: ${ctx.latency}ms`
    });


    ctx.reply({ embeds: [embed] });
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
    <td align="center"><a href="https://github.com/paishee"><img src="https://avatars.githubusercontent.com/u/88659700?v=4?s=100" width="100px;" alt="me"/><br /><sub><b>paishee</b></sub></a><br/>
    <td align="center"><a href="https://github.com/RockyRosso"><img src="https://avatars.githubusercontent.com/u/79947006?v=4?s=100" width="100px;" alt="rocky"/><br /><sub><b>RockyRosso</b></sub></a><br/>
    <td align="center"><a href="https://github.com/polish-penguin-dev"><img src="https://avatars.githubusercontent.com/u/74113025?v=4?s=100" width="100px;" alt="penguins"/><br /><sub><b>penguin dev</b></sub></a><br/>
</td>
    
      
</table>
