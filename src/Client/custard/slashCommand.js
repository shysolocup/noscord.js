const { Client } = require('../index.js');


function f(...args) {
    this.import("commands");
    return commands.createSlash(...args);
}

Client.newF("slashCommand", f);
Client.newF("command", f);
