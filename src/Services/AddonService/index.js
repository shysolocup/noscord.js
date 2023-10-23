const { Client } = require('../../Client');

Client.newC("AddonService", class {
    create(...args) {
        return new this.Addon(...args);
    }
});

module.exports = AddonService;

require('./Addon.js');
