# type service
the type service is where custom types like Message, User, Guild, and Channel are stored<br>
it's mostly for developer use though<br><br>

types start out as thier initial classes and then you can use the apply function to add data to them
```js
// creates a new message type
const msg = new types.Message;


// applies ctx to it
await msg.apply(ctx);
```
