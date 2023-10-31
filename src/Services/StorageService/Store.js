const StorageService = require('./index.js');


StorageService.newC("Store", class {
    constructor(name, data) {
        this.stores.push(name, data);
    }
});


module.exports = Store;
