creates a new paged list<br>
type: `AeplSubClass`<br><br>
arguments:
- per `Number`: how many entries should be included per page
- object `Array/Object`
- start `Number`: what page it starts on

<br>

```js
let pad = new util.Pad(2, [ "a", "b", "c", "d" ]);

console.log(pad.current); // ["a", "b"]

pad.next();

console.log(pad.current); // ["c", "d"]
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/UtilService/custard/Pad.js)

<br>

| <h3>Properties</h3> | <h3>Functions</h3> |
| - | - |
| [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.current) current | [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.next()) next() |
| [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.pages) pages | [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.prev()) prev() |
| [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.length) length | [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.to()) to() |
| [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.page) page | [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.get()) get() |
| [🛈](https://github.com/shysolocup/noscord.js/wiki/Util.Pad.contents) contents |

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Util) </h1>