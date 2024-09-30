creates slash commands<br>
type: `Function`<br><br>
arguments: 
- name/data `String/Object`: first argument can either be the name or an object with data
- ?description `String`
- ?options `Array`
- ?nsfw `Boolean`
- action `Function`: it'll always grab the last argument as the action
<br>

returns:
- context: interaction and info for the command

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/CommandService/custard/create.js)

<br>

```js
commands.create("test1", "first test command", (ctx) => {
    ctx.reply("this is a test command!");
});



commands.create({ name: "test2", desc: "second test command"}, (ctx) => {
    ctx.reply("this is a test command!");
});



let options = [{ name: "user", desc: "a user", type: "user", required: true }];



command.create("test3", "third test command", options, (ctx) => {
    let userId = ctx.args[0].value;
    ctx.reply(`Hi <@${userId}>!`);
});



commands.create({ name: "test4", desc: "fourth test command", options: options }, (ctx) => {
    let userId = ctx.args[0].value;
    ctx.reply(`Hi <@${userId}>!`);
});
```


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Commands) </h1>