const { Client } = require('../../Client');
const Soup = require('stews');
const fs = require('fs');

Client.newC("ErrorService");

module.exports = ErrorService;

require('./NosError.js');
