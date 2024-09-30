<table>
<tr><td>

service class for creating and altering attachments and images

heavily uses [skr canvas](https://www.npmjs.com/package/@napi-rs/canvas)

</td><td> 

`AeplSubClass`

</td><td>

- [src / Services / AttachmentService](https://github.com/shysolocup/noscord.js/tree/main/src/Services/AttachmentService)
- [src / Services / TypeService / types / Attachment](https://github.com/shysolocup/noscord.js/tree/main/src/Services/TypeService/types/Attachment)
- [src / Client / index.js](https://github.com/shysolocup/noscord.js/blob/main/src/Client/index.js)

</td></tr>

</table>

<table>

<tr><td> JS </td></tr>
<tr><td>

```js
const { Client } = require('noscord.js');                
const client = new Client();

client.import("attachments");

let imgUrl = "https://raw.githubusercontent.com/shysolocup/noscord.js/main/assets/mini%20noscord.js.png";

client.on("ready", async () => 
    await attachments.create(imgUrl, { name: "logo", width: 50, height: 50 });
});
```

</td></tr>
</table>


<table>

[comment]: <> ( top row )

<tr><th>
<h3>  Methods  </h3>
</th><th>
<h3>  Classes  </h3>
</th></tr>



[comment]: <> ( 1st row )


<tr><td>

[comment]: <> (Method)
[🛈](https://github.com/shysolocup/noscord.js/wiki/AttachmentService.create()) create()
</td><td>

[comment]: <> (Class)
[🛈](https://github.com/shysolocup/noscord.js/wiki/Attachment) Attachment
</td></tr>


[comment]: <> ( 2nd row )


<tr><td>

[comment]: <> (Method)
[🛈](https://github.com/shysolocup/noscord.js/wiki/AttachmentService.resize()) resize()
</td><td>

[comment]: <> (Class)
</td></tr>


[comment]: <> ( 3rd row )


<tr><td>

[comment]: <> (Method)
[🛈](https://github.com/shysolocup/noscord.js/wiki/AttachmentService.circlify()) circlify()
</td><td>

[comment]: <> (Class)
</td></tr>


[comment]: <> ( 4th row )


<tr><td>

[comment]: <> (Method)
[🛈](https://github.com/shysolocup/noscord.js/wiki/AttachmentService.blow()) blow()
</td><td>

[comment]: <> (Class)
</td></tr>



</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Client) </h1>