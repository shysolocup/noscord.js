<table>
<tr><td>

adds a new listener to select menu submit events<br>

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.onSubmit(async (ctx) => {       
    console.log("any selection has been submitted");
});   

client.onSubmit("my_selection", async (ctx) => {       
    console.log("my selection has been submitted");
});   
```

</td></tr>
</table>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / onSubmit.js](https://github.com/paishee/noscord.js/blob/main/src/Client/custard/onSubmit.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?id* `String`<br>
> specific select menu id to listen for<br>
>
> - *callback* `Function`<br>
> callback ran when the event is fired
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Client-Elements) </h1>