# event service
the event service is where events and stuff are managed<br>
if you want to see the events ported from discord.js you can run the script in the [_deflist.js](https://github.com/paigeroid/noscord.js/blob/main/src/Services/EventService/_deflist.js) file<br>
if you want to see the custom list of events you can look at the [_custlist.json](https://github.com/paigeroid/noscord.js/blob/main/src/Services/EventService/_custlist.json) file<br>
if you want to create custom events you can use the create function or use the Event class
```js
const events = new client.EventService;


let event = events.create();
client.events.push("test", event);


client.on("test", (a, b) => {
    console.log(a, b); // 1 2
});


event.fire(1, 2);
```
