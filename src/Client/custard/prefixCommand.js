const { Client } = require('../index.js');


Client.newF("prefixCommand", function(...args) {
    this.import("commands");
    return commands.createPrefix(...args);
});
