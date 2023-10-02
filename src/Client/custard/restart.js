const { Client } = require('../index.js');


Client.newF("restart", function () {
    let token = this.shit.token;
    return this.shit.destroy();
    this.shit.login(token);
});
