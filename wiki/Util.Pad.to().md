goes to a given page<br>
type: `Function`<br><br>
arguments:
- page `Number`
<br>

```js
let pad = new util.Pad(2, [ 
    "a", "b", // page 1
    "c", "d", // page 2
    "e", "f" // page 3
]);


pad.current; // [ "a", "b" ]

pad.to(3);

pad.current; // [ "e", "f" ]
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/UtilService/custard/Pad.js)


<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Util.Pad) </h1>