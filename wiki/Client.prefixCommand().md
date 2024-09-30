<table>
<tr><td>

creates a new [Prefix Command](https://github.com/paishee/noscord.js/SlashCommand)<br>

works the same as [CommandService.createPrefix()](https://github.com/paishee/noscord.js/wiki/CommandService.createPrefix())

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / prefixCommand.js](https://github.com/paishee/noscord.js/blob/main/src/Client/custard/prefixCommand.js)
- [src / Services / CommandService / custard / createPrefix.js](https://github.com/paishee/noscord.js/blob/main/src/Services/CommandService/custard/createPrefix.js)
- [src / Services / CommandService / custard / PrefixCommand.js](https://github.com/paishee/noscord.js/blob/main/src/Services/CommandService/custard/PrefixCommand.js)


</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *name* `String`<br>
> name of the command
>
> - *?aliases* `Array`<br>
> array of alternate names for the command
>
> - *?cooldown* `String` or `Number`<br>
> cooldown on the command either using time parsing or just a number<br>
> can be formatted like "1m" or just 60
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
client.prefixCommand("example", ["ex", "exp"], async (ctx) => {      
    console.log(ctx);
});
```

</td></tr>
</table>

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Client-Elements) </h1>