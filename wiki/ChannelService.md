<table>
<tr><td>

service class for channel related methods

if you're looking for specific channel types look to the [Channel Types Guide](https://github.com/paishee/wiki/noscord.js/Channel-Types-Guide)
</td><td> 

`AeplSubClass`

</td><td>

- [src / Services / ChannelService](https://github.com/paishee/noscord.js/tree/main/src/Services/ChannelService)
- [src / Client / index.js](https://github.com/paishee/noscord.js/blob/main/src/Client/index.js)

</td></tr>

</table>

<table>

<tr><td> JS </td></tr>
<tr><td>

```js
const { Client } = require('noscord.js');                
const client = new Client();

client.import("channels");

client.on("ready", async () => {
    let channel = await channels.get("put your id here");

    channel.send("example");
});
```

</td><td>

# [[ + ]](https://github.com/paishee/noscord.js/wiki/ChannelService-Elements)

</td></tr>
</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/Client) </h1>