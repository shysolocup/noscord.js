const { Client } = require('../../Client');

Client.newC("EventService", class {
    create() {
        return new this.Event(...Array.from(arguments));
    }

    get list() {
	    return this.parent.events;
    }
});

module.exports = EventService;

require('./Event.js');
require('./glue');
