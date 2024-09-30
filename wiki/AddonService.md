<table>
<tr><td>

service class for creating addon service classes

if you want to make addons I highly suggest studying [aepl](https://github.com/paishee/aepl)

</td><td> 

`AeplSubClass`

</td><td>

- [src / Services / AddonService](https://github.com/paishee/noscord.js/tree/main/src/Services/AddonService)
- [src / Client / index.js](https://github.com/paishee/noscord.js/blob/main/src/Client/index.js)

</td></tr>

</table>

<table>

<tr><td> JS </td></tr>
<tr><td>

```js
const { Client } = require('noscord.js');                
const client = new Client();

client.import("addons");

addons.create("Example", "ex", class {
    constructor() {
        this.client = this.parent;
        this.data = [1, 2, 3];
    }
    reverse() {
        return this.data.reverse();
    }
});

client.import("ex");
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
[🛈](https://github.com/paishee/noscord.js/wiki/AddonService.create()) create()
</td><td>

[comment]: <> (Class)
[🛈](https://github.com/paishee/noscord.js/wiki/Addon) Addon
</td></tr>



</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/Client) </h1>