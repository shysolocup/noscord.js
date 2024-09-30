creates slash commands from the client<br>
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

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/CommandService/custard/create.js)

<br>

```js
client.command("test1", "first test command", (ctx) => {
    ctx.reply("this is a test command!");
});



client.command({ name: "test2", desc: "second test command"}, (ctx) => {
    ctx.reply("this is a test command!");
});



let options = [{ name: "user", desc: "a user", type: "user", required: true }];



client.command("test3", "third test command", options, (ctx) => {
    let userId = ctx.args[0].value;
    ctx.reply(`Hi <@${userId}>!`);
});



client.command({ name: "test4", desc: "fourth test command", options: options }, (ctx) => {
    let userId = ctx.args[0].value;
    ctx.reply(`Hi <@${userId}>!`);
});
```


<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Client) </h1>