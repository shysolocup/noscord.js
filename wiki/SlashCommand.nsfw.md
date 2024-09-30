if the slash command is nsfw or not<br>
type: `Boolean`<br><br>
```js
commands.create("example1", "example desc", null, null, true);
commands.create("example2", "example desc", null, null, false);

commands.create({ name: "example3", desc: "example desc", nsfw: true });
commands.create({ name: "example4", desc: "example desc", nsfw: false });
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/CommandService/custard/SlashCommand.js)


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Commands.SlashCommand) </h1>