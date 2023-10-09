# addon service
the addon service is how you can create custom addons for the API<br>
it lets you access parts of the API without outright having to include the client because of the parent system<br>
mostly useful for modding and other developer stuffs<br>
for more info on how it works check out [aepl](https://github.com/paigeroid/aepl) stuff
```js
const addons = new client.AddonService;


addons.create("Test", class {
    constructor(/**/) {
        this.data = Array.from(arguments);
    }
});


Test.newF("reverse", function() {
    return this.data.reverse();
});


let thing = new client.Test("a", "b", "c");


console.log(thing.data); // ["a", "b", "c"]
console.log(thing.reverse()); // ["c", "b", "a"]
```
