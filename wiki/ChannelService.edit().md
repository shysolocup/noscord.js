<table>
<tr><td>

edits a given channel<br>

returns one of the [channel types](https://github.com/shysolocup/noscord.js/Channel-Types-Guide)

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.import("channels");

client.on("send", async (ctx) => {
    await channels.edit(ctx.channel, { name: "example" });
});
```

</td></tr>
</table>

</td><td> 

`Function` `Async`

</td><td>

- [src / Services / ChannelService / custard / edit.js](https://github.com/shysolocup/noscord.js/blob/main/src/Services/ChannelService/custard/edit.js)

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
> settings for editing the channel<br>
> possible settings:<br>
>> - *name* `String`<br>
>> the channel's name
>>
>> - *topic/desc* `String`<br>
>> the channel's topic
>>
>> - *slowmode* `String` or `Number`<br>
>> the channel's slowmode
>>
>> - *category/parent* `String`<br>
>> the id of the parent category
>>
>> <br>
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/ChannelService-Elements) </h1>