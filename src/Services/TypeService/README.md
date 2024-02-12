## Quick Jumps:

<table>

<tr>
<td> <b>Attachment</b> </td><td> <b>BaseChannel</b> </td><td> <b>Category</b> </td><td> <b>ChannelGroup</b> </td>
</tr>

<tr><td>
  
- [Main](https://github.com/paishee/noscord.js/blob/main/src/Services/TypeService/types/Attachment/index.js)

</td><td>

- [Main](https://github.com/paishee/noscord.js/blob/main/src/Services/TypeService/types/BaseChannel/index.js)
- [Applier](https://github.com/paishee/noscord.js/blob/main/src/Services/TypeService/types/BaseChannel/custard/apply.js)
  
</td><td>

- [Main](https://github.com/paishee/noscord.js/blob/main/src/Services/TypeService/types/Category/index.js)
- [Applier](https://github.com/paishee/noscord.js/blob/main/src/Services/TypeService/types/Category/custard/apply.js)
  
</td><td>

- [Main](https://github.com/paishee/noscord.js/blob/main/src/Services/TypeService/types/ChannelGroup/index.js)
- [Applier](https://github.com/paishee/noscord.js/blob/main/src/Services/TypeService/types/ChannelGroup/custard/apply.js)
  
</td></tr>

  
</table>


---

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
