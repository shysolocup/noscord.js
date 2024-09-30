cooldown data for the slash command<br>
type: [`CooldownHandle`](https://github.com/paigeroid/noscord.js/wiki/Commands.SlashCommand.CooldownHandle)<br><br>
```js
commands.create("example1", "example desc", null, 5);
commands.create("example2", "example desc", null, "5s");

commands.create({ name: "example3", desc: "example desc", cooldown: 5 });
commands.create({ name: "example4", desc: "example desc", cooldown: "5s" });
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/CommandService/custard/SlashCommand.js)


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Commands.SlashCommand) </h1>