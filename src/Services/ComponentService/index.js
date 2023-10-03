const { Client } = require('../../Client');
const fs = require('fs');

Client.newC("ComponentService");

module.exports = ComponentService;

let comp_dir = require('./components/_funkydir');
let components = fs.readdirSync(comp_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

components.forEach( (file) => {
    require(`./components/${file}`);
});
