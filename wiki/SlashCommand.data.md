function data for the slash command that's fired off when it is ran<br>
the data is always the last argument given<br>

type: `Function`<br><br>
```js
commands.create("example1", "example desc", (ctx) => {
    // do stuff
});


commands.create({ name: "example2", desc: "example desc" }, (ctx) => {
    // do stuff
});
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/CommandService/custard/SlashCommand.js)


<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Commands.SlashCommand) </h1>