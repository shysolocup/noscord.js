const { Client } = require('../Client/index.js');
const { Soup } = require('stews');


Client.newC("Store", class {
    constructor(contents) {
        this.contents = new Soup(contents);
    }
});


module.exports = Store;
