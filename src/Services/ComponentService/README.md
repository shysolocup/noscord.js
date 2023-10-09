# component service
the component service is the way that you create buttons, select menus, action rows, and embeds
```js
new client.ComponentService;


let embed = new Embed({
    description: "text",
});


let row = new Row([
    new Button({ id: "a", label: "a", style: "success" }),
    new Button({ id: "b", label: "b", style: "danger" })
]);
```
