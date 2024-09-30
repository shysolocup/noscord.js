goes to the next page, if it goes past the last page it repeats back to page 1<br>
type: `Function`<br><br>
arguments:
- by `Number`: defaults to 1
<br>

```js
let pad = new util.Pad(2, [ 
    "a", "b", // page 1
    "c", "d", // page 2
]);


pad.current; // [ "a", "b" ]


pad.next();
pad.current; // [ "c", "d" ]


pad.next();
pad.current; // [ "a", "b" ]
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/UtilService/custard/Pad.js)


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Util.Pad) </h1>