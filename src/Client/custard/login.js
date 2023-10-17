const { Client } = require('../index.js');


Client.newF("login", function(token) {
    this.token = token;
    this._base.login(token);
});
