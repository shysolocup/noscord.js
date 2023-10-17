const { Client } = require('../index.js');


Client.newF("restart", function () {
    let token = this._base.token;
    this._base.destroy();
    this._base.login(token);
});
