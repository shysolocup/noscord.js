const AddonService = require('./index.js');
const { Client } = require('../../Client');


AddonService.newC("Addon", class {
    constructor() {
        return Client.newC(...Array.from(arguments));
    }
});


module.exports = Addon;
