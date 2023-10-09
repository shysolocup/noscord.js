# message service
the message service is a tool you can use to manage and fetch messages
```js
const msgs = new client.MessageService;


msgs.get(id, channel);


msgs.list(channel); // gets the last 100 messages in the channel
msg.list(channel, 10); // gets the last 10 messages in the channel
```
