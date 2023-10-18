# event service
the event service is where events and stuff are managed and stored<br>
if you want to create custom events you can use the create function or use the Event class<br>
for more advanced uses look to the [glue folder](https://github.com/paigeroid/noscord.js/tree/main/src/Services/EventService/glue) for more info because that's where discord.js event binding and stuff is
```js
const events = new client.EventService;


let event = events.create();
client.events.push("test", event);


client.on("test", (a, b) => {
    console.log(a, b); // 1 2
});


event.fire(1, 2);
```
