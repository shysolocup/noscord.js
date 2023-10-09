# error service
the error service is how you can create your own errors
```js
const errors = new client.ErrorService;


let error = errors.create();


error.fire("thing error", "you did a bad thing");
```
