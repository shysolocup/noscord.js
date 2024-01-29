const { Client } = require('../../Client');
const fs = require('fs');

Client.newC("ComponentService");

module.exports = ComponentService;

let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});


let comp_dir = `${__dirname}/components`
let comp = fs.readdirSync(comp_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

comp.forEach( (file) => {
    require(`./components/${file}`);
});
