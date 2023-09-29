const { Client } = require('../../Client');
const fs = require('fs');

Client.newC("ChannelService");

module.exports = ChannelService;


let func_dir = require('./functions/_funkydir');
let functions = fs.readdirSync(func_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

functions.forEach( (file) => {
    require(`./functions/${file}`);
});
