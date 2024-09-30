section for creating and slash commands<br>
type: `AeplSubClass`<br>

```js
client.import("commands");


commands.create("ping", "replies with pong", (ctx) => {
    ctx.reply("Pong!");
});
```

### [source](https://github.com/paigeroid/noscord.js/tree/main/src/Services/CommandService)

<br>

| <h3>Properties</h3> | <h3>Methods</h3> | <h3>Classes</h3> |
| - | - | - |
| [🛈](https://github.com/paigeroid/noscord.js/wiki/Commands.list) list | [🛈](https://github.com/paigeroid/noscord.js/wiki/Commands.create()) create() | [🛈](https://github.com/paigeroid/noscord.js/wiki/Commands.SlashCommand) SlashCommand |
| | [🛈](https://github.com/paigeroid/noscord.js/wiki/Commands.optionType()) optionType() | |

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki) </h1>