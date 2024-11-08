const { Client } = require('../../Client');
const fs = require('fs');
const { Soup } = require('stews');


Client.newC("VoiceService", class {
    players = new Soup(Array)
    sounds = new Soup(Array)
    audiocache = new Soup(Array)
    
    playing = new Soup(Array)
    paused = new Soup(Array)
});


module.exports = VoiceService;

let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
