<table>
<tr><td>

gets a number of all channels not including categories<br>

returns a Number

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.import("channels");

client.on("send", async (ctx) => {
    let stuff = await channels.count(ctx.guild);
});
```

</td></tr>
</table>

</td><td> 

`Function` `Async`

</td><td>

- [src / Services / ChannelService / custard / count.js](https://github.com/shysolocup/noscord.js/blob/main/src/Services/ChannelService/custard/count.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?guild* [`Guild`](https://github.com/shysolocup/noscord.js/wiki/Guild)<br>
> guild to get the channels from<br>
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/ChannelService-Elements) </h1>