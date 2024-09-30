parses times from strings in milliseconds<br>
type: `Function`<br><br>
arguments:
- time `String`

<br>

```js
util.parse(5); // 5000

util.parse("5s"); // 5000

util.parse("5ms"); // 5000

util.parse("5m"); // 300000

util.parse("5h"); // 18000000

util.parse("5d"); // 432000000

util.parse("5w"); // 3024000000

util.parse("5y"); // 157680000000
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/UtilService/custard/parseMs.js)

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Util) </h1>