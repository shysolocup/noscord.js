# expression service
the expression service is for managing and getting available emojis and stickers
```js
const exp = new client.ExpressionService;


await exp.emojis(guild);
await exp.stickers(guild);


await exp.emojiCount(guild);
await exp.stickerCount(guild);
```
