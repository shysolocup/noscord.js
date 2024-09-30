creates a new paged list<br>
type: `Function`<br><br>
arguments:
- per `Number`: how many entries should be included per page
- object `Array/Object`
- start `Number`: what page it starts on

<br>

```js
let pad = util.pad(2, [ "a", "b", "c", "d" ]);

console.log(pad.current); // ["a", "b"]

pad.next();

console.log(pad.current); // ["c", "d"]
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/UtilService/custard/pad.js)

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Util) </h1>