<table>
<tr><td>

creates a new global [Slash Command](https://github.com/shysolocup/noscord.js/SlashCommand)<br>

works the same as [CommandService.createSlash()](https://github.com/shysolocup/noscord.js/wiki/CommandService.createSlash())

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / slashCommand.js](https://github.com/shysolocup/noscord.js/blob/main/src/Client/custard/slashCommand.js)
- [src / Services / CommandService / custard / createSlash.js](https://github.com/shysolocup/noscord.js/blob/main/src/Services/CommandService/custard/createSlash.js)
- [src / Services / CommandService / custard / SlashCommand.js](https://github.com/shysolocup/noscord.js/blob/main/src/Services/CommandService/custard/SlashCommand.js)


</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *name* `String`<br>
> name of the command
>
> - *description* `String`<br>
> description of the command
>
> - *?options* `Array`<br>
> array of arguments for the command
>
> - *?cooldown* `String` or `Number`<br>
> cooldown on the command either using time parsing or just a number<br>
> can be formatted like "1m" or just 60
>
> - *?nsfw* `Boolean`<br>
> if the command is not safe for work or not<br>
> defaults to false
>
> - *callback* `Function`<br>
> what the command does when ran
>
> - *?data* `Object`<br>
> all of the data for the command in an object instead of just in arguments
> <br>

<br>

</td>

</table>

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.slashCommand("example", "example command", async (ctx) => {      
    console.log(ctx);
});
```

</td></tr>
</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Client-Elements) </h1>