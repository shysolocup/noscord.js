const { Client } = require('../../Client');
const fs = require('fs');

Client.newC("TypeService");

module.exports = TypeService;

let type_dir = require('./types/_funkydir');
let types = fs.readdirSync(type_dir).filter( folder => ( folder != "_funkydir" ) );

types.forEach( (folder) => {
    require(`./type/${folder}`);
});
