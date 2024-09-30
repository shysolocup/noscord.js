<table>
<tr><td>

adds a new listener to a given event(s)<br>

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.on("send", async (ctx) => {       
    console.log(ctx);
});   
```

</td></tr>
</table>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / on.js](https://github.com/paishee/noscord.js/blob/main/src/Client/custard/on.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *event(s)* `String` or `Array`<br>
> all of the events you want to listen to<br>
>
> - *callback* `Function`<br>
> callback ran when the event is fired
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/Client-Elements) </h1>