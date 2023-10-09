# voice service
the voice service is the way you can manage voice stuff
```js
const voice = new client.VoiceService;


let channel = await voice.find(user, guild);


voice.join(channel);


await voice.mute(user, guild);
await voice.deafen(user, guild);


voice.leave(channel);
```
