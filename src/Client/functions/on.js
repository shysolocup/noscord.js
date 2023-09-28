const { Client } = require('../index.js');


Client.newF("on", function(event, func) {
    this.events.get(event).listen(func);
})
