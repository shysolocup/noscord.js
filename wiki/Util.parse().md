parses times from strings<br>
type: `Function`<br><br>
arguments:
- time `String`

<br>

```js
util.parse(5); // 5

util.parse("5s"); // 5

util.parse("5ms"); // 5000

util.parse("5m"); // 300

util.parse("5h"); // 18000

util.parse("5d"); // 432000

util.parse("5w"); // 3024000

util.parse("5y"); // 157680000
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/UtilService/custard/parse.js)

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Util) </h1>