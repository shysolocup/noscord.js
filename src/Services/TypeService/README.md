# type service
the type service is where custom types like Message, User, Guild, and Channel are stored<br>
it's mostly for developer use though
```js
const types = new client.TypeService;


let msg = new types.Message();
await msg.apply(rawMsg);


let tc = new types.TextChannel();
await tc.apply(rawTC);


let vc = new types.VoiceChannel();
await vc.apply(rawVC);
```
