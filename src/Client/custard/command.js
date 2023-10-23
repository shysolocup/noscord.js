const { Client } = require('../index.js');


Client.newF("command", function(...args) {
    this.import("commands");
    return commands.create(...args);
});
