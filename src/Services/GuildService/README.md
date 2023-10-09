# guild service
the guild service is what you can use to manage and fetch available guilds
```js
const guilds = new client.GuildService;


let guild = await guilds.get(id);
let count = await guilds.count();
let list = await guilds.list();
```
