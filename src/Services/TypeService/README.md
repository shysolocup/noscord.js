# type service
the type service is where custom types like Message, User, Guild, and Channel are stored<br>
it's mostly for developer use though
```js
const types = new client.TypeService;


new types.Message(rawMsg);


new types.TextChannel(rawTC);


new types.VoiceChannel(rawVC);
```
