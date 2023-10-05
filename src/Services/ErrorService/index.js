const { Client } = require('../../Client');
const Soup = require('stews');
const fs = require('fs');

Client.newC("ErrorService", class {
    constructor() {
        this.errors = new Soup(Object);
    }
});

module.exports = ErrorService;

let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
