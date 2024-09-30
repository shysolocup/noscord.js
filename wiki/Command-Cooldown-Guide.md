cooldowns make it so users can't spam commands by restricting users from using the command for a period of time<br>
```js
commands.create("example1", "example desc", null, 5);
commands.create("example2", "example desc", null, "5s");

commands.create({ name: "example3", desc: "example desc", cooldown: 5 });
commands.create({ name: "example4", desc: "example desc", cooldown: "5s" });
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/CommandService/custard/CooldownHandle.js)

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Guides) </h1>