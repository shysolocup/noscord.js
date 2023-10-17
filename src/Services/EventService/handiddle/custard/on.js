const EventHandler = require('../index.js');


EventHandler.newF("on", (event, func) => {
    this.events.get(event).listen(func);
    return func
});
