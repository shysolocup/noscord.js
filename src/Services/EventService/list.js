module.exports = [ 
    ["ready", "run", "login"],             // login
    ["messageCreate", "messageSent"]       // message sent
];


const { Client } = require('../../Client');
const fs = require('fs');


Client.newF("EventSetup", function() {
    let port_dir = require('./ports/_funkydir');
    let ports = fs.readdirSync(port_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

    ports.forEach( (file) => {
        require(`./ports/${file}`)(this.parent);
    });
});
