<table>
<tr><td>

gets a number of voice channels<br>

returns a Number

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.import("channels");

client.on("send", async (ctx) => {
    let stuff = await channels.voiceCount(ctx.guild);
});
```

</td></tr>
</table>

</td><td> 

`Function` `Async`

</td><td>

- [src / Services / ChannelService / custard / voiceCount.js](https://github.com/paishee/noscord.js/blob/main/src/Services/ChannelService/custard/voiceCount.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?guild* [`Guild`](https://github.com/paishee/noscord.js/wiki/Guild)<br>
> guild to get the voice channels from<br>
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/ChannelService-Elements) </h1>