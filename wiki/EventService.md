<table>
<tr><td>

service class for handling, creating, and storing event-related stuff

> notes:
> - events are stored in [Client.events](https://github.com/paishee/noscord.js/wiki/Client.events)<br>
> - [glue handling](https://github.com/paishee/noscord.js/wiki/GlueHandler) is a big rabbit hole I don't suggest going through it unless you really want to learn how it works internally

</td><td> 

`AeplSubClass`

</td><td>

- [src / Services / EventService](https://github.com/paishee/noscord.js/tree/main/src/Services/EventService)
- [src / Client / index.js](https://github.com/paishee/noscord.js/blob/main/src/Client/index.js)

</td></tr>

</table>

<table>

<tr><td> JS </td></tr>
<tr><td>

```js
const { Client } = require('noscord.js');                
const client = new Client();

client.import("events");

let event = new events.Event;
client.events.push("example", event);

client.on("example", (a, b) => {
    console.log(a, b); // 1 2
});

event.fire(1, 2);
```

</td></tr>
</table>


<table>

[comment]: <> ( top row )

<tr><th>
<h3>  Properties  </h3>
</th><th>
<h3>  Methods  </h3>
</th><th>
<h3>  Classes  </h3>
</th></tr>



[comment]: <> ( 1st row )


<tr><td>

[comment]: <> (Property)
[🛈](https://github.com/paishee/noscord.js/wiki/Client.events) list
</td><td>

[comment]: <> (Method)
[🛈](https://github.com/paishee/noscord.js/wiki/EventService.create()) create()
</td><td>

[comment]: <> (Class)
[🛈](https://github.com/paishee/noscord.js/wiki/Event) Event
</td></tr>


[comment]: <> ( 2nd row )


<tr><td>

[comment]: <> (Property)
</td><td>

[comment]: <> (Method)
</td><td>

[comment]: <> (Class)
[🛈](https://github.com/paishee/noscord.js/wiki/GlueHandler) GlueHandler
</td></tr>



</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/Client) </h1>