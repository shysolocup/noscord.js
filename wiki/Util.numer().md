creates a formatted number<br>
type: `Function`<br><br>
arguments:
- number `Number`
- settings `Object`
<br>

settings:
- currency `Any`
- roundTo `Number`

<br>

```js
util.numer(2500); // "2,500"

util.numer(2500, { roundTo: 1 }); // "2,500.0"
util.numer(2500, { roundTo: 2 }); // "2,500.00"

util.numer(2500, { currency: "$" }); // "$2,500"
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/UtilService/custard/numer.js)

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Util) </h1>