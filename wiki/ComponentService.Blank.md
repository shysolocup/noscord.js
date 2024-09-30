creates a blank space in an embed<br>
type: `AeplSubClass`<br><br>

NOTE: if inline or a line is not given in the settings it'll automatically make a space between the lines<br><br>

```js
let embed = new Embed({
    description: "this is an example for blanks",

    fields: [
         { name: "A", value: "A", line: 1 },

         new Blank({ line: 1 }),

         { name: "B", value: "B", line: 1 }
    ]
});
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/ComponentService/components/Blank.js)

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Components) </h1>