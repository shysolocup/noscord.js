# app service
the app service is where things like sleep, random, and timestamps are handled<br>
it's used for appliance in code to create delays with sleep or use random number generator stuff
```js
const app = new client.AppService;


app.random(1, 5);


await app.sleep("1s");


app.parse("1s"); // 1


new Timestamp();
```
