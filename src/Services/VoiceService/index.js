const { Client } = require('../../Client');
const fs = require('fs');
const { Soup } = require('stews');


Client.newC("VoiceService", {
    players: new Soup(),
    
    playing: new Soup(),
    paused: new Soup(),

    playing: false,
    paused: true,
});


module.exports = VoiceService;

let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
