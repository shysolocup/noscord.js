const StorageService = require('./index.js');
const { Soup } = require('stews');


StorageService.newC("Store", class {
    constructor(contents) {
        this.contents = new Soup(contents);
    }
});


module.exports = Store;
