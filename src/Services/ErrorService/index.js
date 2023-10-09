const { Client } = require('../../Client');
const Soup = require('stews');
const fs = require('fs');

Client.newC("ErrorService", class {
    create() {
        return new this.NosError(...Array.from(arguments));
    }
});

module.exports = ErrorService;

require('./NosError.js');
