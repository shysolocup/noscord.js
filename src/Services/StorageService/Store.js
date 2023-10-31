const StorageService = require('./index.js');


StorageService.newC("Store", class {
    constructor(name, data) {
        this.parent.stores.push(name, data);
        return this.parent.stores;
    }
});


module.exports = Store;
