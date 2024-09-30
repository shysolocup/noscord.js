<table>
<tr><td>

adds a new listener to [SlashCommandRun](https://github.com/paishee/noscord.js/wiki/SlashCommandRun) events<br>

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.onSlash(async (ctx) => {       
    console.log("any command has been run");
});   

client.onSlash("my_command", async (ctx) => {       
    console.log("my command has been run");
});   
```

</td></tr>
</table>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / onSlash.js](https://github.com/paishee/noscord.js/blob/main/src/Client/custard/onSlash.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?name* `String`<br>
> specific command name to listen for<br>
>
> - *callback* `Function`<br>
> callback ran when the event is fired
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Client-Elements) </h1>