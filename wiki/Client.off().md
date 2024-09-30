<table>
<tr><td>

removes a listener to a given event(s)<br>

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
async function callback(ctx) {       
    console.log(ctx);
}

client.on("send", callback); // adds the listener
client.off("send", callback); // removes the listener
```

</td></tr>
</table>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / off.js](https://github.com/paishee/noscord.js/blob/main/src/Client/custard/off.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *event(s)* `String` or `Array`<br>
> all of the events you want to remove a listener from<br>
>
> - *callback* `Function`<br>
> callback for the listener
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Client-Elements) </h1>