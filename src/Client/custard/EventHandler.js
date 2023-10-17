const { Client } = require('../index.js');
const { Soup } = require('stews');


Client.newC("EventHandler", class {
    constructor() {
        this.client = this.parent;
        this.types = this.client.types;
        this._base = this.client._base;
    }


    init(name, type) {
        
    }
});


module.exports = EventHandler;
