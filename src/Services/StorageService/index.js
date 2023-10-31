const { Client } = require('../../Client');
const { Soup } = require('stews');

Client.newC("StorageService", class {
    constructor() {
        this.stores = new Soup(Object);
    }
    
    create(...args) {
        return new this.Store(...args);
    }

    get(name) {
        return this.stores.get(name);
    }
});

module.exports = StorageService;

require('./Store.js');
