<table>
<tr><td>

deletes a given channel<br>

returns one of the [channel types](https://github.com/shysolocup/noscord.js/Channel-Types-Guide)

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.import("channels");

client.on("send", async (ctx) => {
    await channels.delete(ctx.channel);
});
```

</td></tr>
</table>

</td><td> 

`Function` `Async`

</td><td>

- [src / Services / ChannelService / custard / delete.js](https://github.com/shysolocup/noscord.js/blob/main/src/Services/ChannelService/custard/delete.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?guild* [`Guild`](https://github.com/shysolocup/noscord.js/wiki/Guild)<br>
> guild to get the categories from<br>
>
> - *?settings* `Object`<br>
> settings for deleting the channel
> possible settings:<br>
>> - *after* `String` or `Number`<br>
>> makes it so it deletes after a timer
>> <br>
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/ChannelService-Elements) </h1>