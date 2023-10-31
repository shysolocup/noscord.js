const { Client } = require('../index.js');


Client.newF("setMax", function(max) {
    this._base.setMaxListeners(max);
});
