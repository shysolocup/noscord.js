<table>
<tr><td>

adds a new listener to button press events<br>

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.onPress(async (ctx) => {       
    console.log("any button has been pressed");
});   

client.onPress("my_button", async (ctx) => {       
    console.log("my button has been pressed");
});   
```

</td></tr>
</table>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / onPress.js](https://github.com/shysolocup/noscord.js/blob/main/src/Client/custard/onPress.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?id* `String`<br>
> specific button id to listen for<br>
>
> - *callback* `Function`<br>
> callback ran when the event is fired
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Client-Elements) </h1>