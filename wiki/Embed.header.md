headers are added onto the start of the description<br>
- the available sizes are 1 (#), 2 (##), and 3 (###)
- if no size is provided it defaults to 1<br><br>

type: `Object/String`<br><br>

parts:
- text `String`
- size `Number`

<br>

```js
let a = new Embed({
    header: { text: "Example", size: 1 }
});


let b = new Embed({
    header: "Example"
});
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/ComponentService/components/Embed.js)

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Components.Embed) </h1>