# util service
the util service contains things like sleep, random, colors, and timestamps<br>
it's used for appliance in code to create delays with sleep or use random number generator stuff
```js
const util = new client.UtilService;


util.random(1, 5);


await util.sleep("1s");


util.parse("1s"); // 1


util.colors.blurple;


new Timestamp();
```
