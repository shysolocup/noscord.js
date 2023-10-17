const EventService = require('../index.js');
const { Soup } = require('stews');


EventService.newC("EventHandler", class {
    constructor() {
        this.client = this.parent.parent;
        this.types = this.client.types;
        this._base = this.client._base;
    }


    init(name, type) {
        
    }
});


module.exports = EventHandler;
