const { Client } = require('../index.js');


Client.newF("login", function(token) {
    this.token = token;
    this.shit.login(token);
});
