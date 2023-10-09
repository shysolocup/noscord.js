# message service
the message service is a tool you can use to manage and fetch messages
```js
const msgs = new client.MessageService;


await msgs.get(id, channel);


await msgs.list(channel); // gets the last 100 messages in the channel
await msgs.list(channel, 10); // gets the last 10 messages in the channel


msgs.purge(10, channel);
```
