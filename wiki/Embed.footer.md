footer for the embed, usually used for extra info or a stat<br>
type: `String/Object`<br>
NOTE:
- footers can't use things like timestamps or headers<br>

<br>

```js
let a = new Embed({
    description: "main info goes here"

    footer: "extra info goes here"
});


let b = new Embed({
    description: "main info goes here",

    footer: {
        text: "extra info goes here",
        icon: "https://github.com/paigeroid/noscord.js/blob/main/assets/mini%20noscord.js.png"
    }
});

```

### [source](https://github.com/paigeroid/noscord.js/blob/main/src/Services/ComponentService/components/Embed.js)

<br> <h1> [🢀 Back](https://github.com/paigeroid/noscord.js/wiki/Components.Embed) </h1>