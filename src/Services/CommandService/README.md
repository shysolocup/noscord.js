# command service
the command service is the part of the API for creating slash commands more effectively
```js
const commands = new client.CommandService;

commands.create("ping", "replies with pong", (ctx) => {
    ctx.reply("pong!");
});
```
