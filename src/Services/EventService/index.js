const { Client } = require('../../Client');

Client.newC("EventService", class {
    create(...args) {
        return new this.Event(...args);
    }

    get list() {
	    return this.parent.events;
    }
});

module.exports = EventService;

require('./Event.js');
require('./glue');
