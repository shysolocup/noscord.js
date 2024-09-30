<table>
<tr><td>

class for blank events

events are stored in [Client.events](https://github.com/shysolocup/noscord.js/wiki/Client.events)

<br>
</td><td> 

`AeplSubClass`

</td><td>

- [src / Services / EventService / Event.js ](https://github.com/shysolocup/noscord.js/tree/main/src/Services/EventService/Event.js)
- [src / Client / index.js](https://github.com/shysolocup/noscord.js/blob/main/src/Client/index.js)

</td></tr>

</table>

<table>

<tr><td> JS </td></tr>
<tr><td>

```js
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
</th></tr>



[comment]: <> ( 1st row )


<tr><td>

[comment]: <> (Property)
[🛈](https://github.com/shysolocup/noscord.js/wiki/Event.listeners) listeners
</td><td>

[comment]: <> (Method)
[🛈](https://github.com/shysolocup/noscord.js/wiki/Event.listen()) listen()
</td></tr>


[comment]: <> ( 2nd row )


<tr><td>

[comment]: <> (Property)
</td><td>

[comment]: <> (Method)
[🛈](https://github.com/shysolocup/noscord.js/wiki/Event.fire()) fire()
</td></tr>



</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/EventService) </h1>