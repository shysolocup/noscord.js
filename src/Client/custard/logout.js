const { Client } = require('../index.js');


Client.newF("logout", function() {
    return this._base.destroy();
});
