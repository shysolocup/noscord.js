<table>
<tr><td>

handles Discord.JS-tied events and acts as a middle-man between Discord.JS, the client, and the developer

> notes:
> - there should be a default glue handler in the client named [Client._handler](https://github.com/paishee/noscord.js/wiki/Client._handler)
> - glue events are stored in [ src / Services / EventService / glue / events](https://github.com/paishee/noscord.js/tree/main/src/Services/EventService/glue/events)

<br>
</td><td> 

`AeplSubClass`

</td><td>

- [src / Services / EventService / glue / index.js](https://github.com/paishee/noscord.js/blob/main/src/Services/EventService/glue/index.js)
- [src / Services / EventService / glue / events](https://github.com/paishee/noscord.js/tree/main/src/Services/EventService/glue/events)
- [src / Client / index.js](https://github.com/paishee/noscord.js/tree/main/src/Client/index.js)

</td></tr>

</table>

<table>

<tr><td> JS </td></tr>
<tr><td>

```js
client._handler.init(

    
    name = ["messageReply", "reply"],  // names of the event

    
    func = async function (...args) { // formatting for types and stuff
        let types = this.types;
        let msg = new types.Message;
        
        await msg.apply(...args);
    
        return [msg, msg.replier];
    }, 

    
    glue = "messageCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return !!ctx.reference;
    }
);
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
[🛈](https://github.com/paishee/noscord.js/wiki/Client) client
</td><td>

[comment]: <> (Method)
[🛈](https://github.com/paishee/noscord.js/wiki/GlueHandler.init()) init()
</td></tr>


[comment]: <> ( 2nd row )


<tr><td>

[comment]: <> (Property)
[🛈](https://github.com/paishee/noscord.js/wiki/Client.types) types
</td></tr>


[comment]: <> ( 3rd row )


<tr><td>

[comment]: <> (Property)
[🛈](https://github.com/paishee/noscord.js/wiki/Client._base) _base
</td></tr>



</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/EventService) </h1>