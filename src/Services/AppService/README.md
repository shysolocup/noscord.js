# app service
the app service contains things like sleep, random, colors, and timestamps<br>
it's used for appliance in code to create delays with sleep or use random number generator stuff
```js
const app = new client.AppService;


app.random(1, 5);


await app.sleep("1s");


app.parse("1s"); // 1


app.colors.blurple;


new Timestamp();
```
