# permission service
the permission service is how you manage permissions for channels, roles, and users
```js
const perms = new client.PermissionService;


await perms.list(user);
await perms.list(role);
await perms.list(channel);


await perms.cache(user);
await perms.cache(role);
await perms.cache(channel);
```
