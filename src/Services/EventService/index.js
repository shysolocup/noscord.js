const { Client } = require('../../Client');

Client.newC("EventService", class {
    create() {
        return new this.Event(...Array.from(arguments));
    }
});

module.exports = EventService;

require('./Event.js');
require('./handiddle');
