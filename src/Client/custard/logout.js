const { Client } = require('../index.js');


function logout() {
    return this.shit.destroy();
}


Client.newF("logout", logout);
Client.newF("logout", destroy);
