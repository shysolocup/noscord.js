listens and responds to when a commmand is ran<br>
only responds to the bot's commands unfortunately<br><br>
type: `Function`<br><br>
arguments: 
- ?name `String`: optional command name
- action `Function`
<br><br>

```js
client.onCommand( (ctx) => {
    ctx.reply("hi! this responds to all commands!");
});


client.onCommand("ping", (ctx) => {
    ctx.reply("pong!");
});
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Client/custard/onCommand.js)

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Client) </h1>