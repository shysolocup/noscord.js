<table>
<tr><td>

gets a list of categories <br>

returns a [ChannelGroup](https://github.com/shysolocup/noscord.js/wiki/ChannelGroup)

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.import("channels");

client.on("send", async (ctx) => {
    let stuff = await channels.categories(ctx.guild);
});
```

</td></tr>
</table>

</td><td> 

`Function` `Async`

</td><td>

- [src / Services / ChannelService / custard / categories.js](https://github.com/shysolocup/noscord.js/blob/main/src/Services/ChannelService/custard/categories.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?guild* [`Guild`](https://github.com/shysolocup/noscord.js/wiki/Guild)<br>
> guild to get the categories from<br>
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/ChannelService-Elements) </h1>