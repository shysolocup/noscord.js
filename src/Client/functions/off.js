const { Client } = require('../index.js');


Client.newF("off", function(event, func) {
    this.events.get(event).listeners.remove(func);
});
