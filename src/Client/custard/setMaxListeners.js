const { Client } = require('../index.js');


Client.newF("setMaxListeners", function(max) {
    this._base.setMaxListeners(max);
});
