creates a new raw action row<br>
type: `AeplSubClass`<br><br>


```js
let top = new Row([
    new Button({ id: "answer_a", label: "A", style: "primary" }),
    new Button({ id: "answer_b", label: "B", style: "primary" }),
]);


let bottom = new Row([
    new Button({ id: "answer_c", label: "C", style: "primary" }),
    new Button({ id: "answer_d", label: "D", style: "primary" }),
]);


message.reply({ components: [top, bottom] });
```

### [source](https://github.com/shysolocup/noscord.js/blob/main/src/Services/ComponentService/components/Row.js)

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Components) </h1>