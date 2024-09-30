<table>
<tr><td>

service class for general utilities such as<br>
- randomization
- code generation
- timestamp creation
- colors<br>

</td><td> 

`AeplSubClass`

</td><td>

- [src / Services / UtilService](https://github.com/paishee/noscord.js/tree/main/src/Services/UtilService)
- [src / Client / index.js](https://github.com/paishee/noscord.js/blob/main/src/Client/index.js)

</td></tr>

</table>

<table>

<tr><td> JS </td></tr>
<tr><td>

```js
const { Client } = require('noscord.js');                
const client = new Client();

client.import("util");

client.on("ready", async () => 
    util.random.int(1, 5); // 2
    util.random.choice([ "a", "b", "c"]); // "c"

    await util.sleep("1s");

    util.parse("1m"); // 60
    util.parseMs("1m"); // 60000

    util.colors.blurple; // "#7289da"

    util.genCode(9); // "ij7elwolz"

    let ts = new Timestamp();
    console.log(ts.relative); // "<t:1543392060:R>"
});
```

</td><td>

# [[ + ]](https://github.com/paishee/noscord.js/wiki/UtilService-Elements)

</td></tr>

</table>

<br> <h1> [🢀 Back](https://github.com/paishee/noscord.js/wiki/Client) </h1>