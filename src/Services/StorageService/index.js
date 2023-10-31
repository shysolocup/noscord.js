const { Client } = require('../../Client');

Client.newC("StorageService", class {
    create(...args) {
        return new this.Store(...args);
    }
});

module.exports = StorageService;

require('./Store.js');
