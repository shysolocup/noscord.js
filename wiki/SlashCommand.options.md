options for the slash command<br>
type: `Array`<br><br>

```js
let options = [
    { name: "user", desc: "test user", type: "user", required: true },
    { name: "boolean", desc: "test bool", type: "bool", required: false }
];


commands.create("example1", "example desc", options);

commands.create({ name: "example2", desc: "example desc", options: options });
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/CommandService/custard/SlashCommand.js)


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Commands.SlashCommand) </h1>