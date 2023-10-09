const { Client } = require('../../Client');

Client.newC("AddonService", class {
    create() {
        return new this.Addon(...Array.from(arguments));
    }
});

module.exports = AddonService;

require('./Addon.js');
