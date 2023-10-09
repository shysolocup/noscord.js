# user service
the user service is the thing you can use to manage and fetch available users
```js
const users = new client.UserService;


await users.get(id);


await users.avatar(user, { width: 100, height: 100 });
await users.avatarUrl(user);


await users.list(guild); // list of all users
await users.members(guild); // list of non-bots
await users.bots(guild); // list of bots


await users.count(guild);
await users.memberCount(guild);
await users.botCount(guild);
```
