const { Client } = require('../index.js');


Client.newF("on", function() {
    this.events.get(event).listen(func);
})
