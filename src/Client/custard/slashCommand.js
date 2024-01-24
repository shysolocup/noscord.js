const { Client } = require('../index.js');


Client.newF("slashCommand", function(...args) {
    this.import("commands");
    return commands.createSlash(...args);
});
