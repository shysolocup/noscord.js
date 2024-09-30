goes to the previous page, if it goes past page 1 it repeats back to the last page<br>
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


pad.prev();
pad.current; // [ "c", "d" ]


pad.prev();
pad.current; // [ "a", "b" ]
```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/UtilService/custard/Pad.js)


<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Util.Pad) </h1>