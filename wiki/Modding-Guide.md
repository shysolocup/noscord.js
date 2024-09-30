Modding in noscord.JS is made simple with [aepl](https://npmjs.com/package/aepl) because of built in function, property, and class makers
```js
const { Noodle } = require('stews');
client.import("types");


types.Message.newF("noodlify", function() {
    return Noodle.from(this.username);
});


types.Message.newP("capuser", function () {
    return this.noodlify().toUpperCase(0);
});


client.on("send", (ctx) => {
    console.log(ctx.username); // user
    console.log(ctx.capuser); // User
});
```
there's also built in addons that add to imports and builds a new class
```js
client.import("addons");


addons.create("Example", "ex", class {
    constructor() {
        this.client = this.parent
    }

    get user() {
        return this.client.user
    }
});


Example.newC("Test", class {
    constructor() {
        this.client = this.parent.parent;
    }
    
    get username() {
        return this.parent.user.username;
    }
});


client.import("ex");


console.log(ex.username); // 