module.exports = [ 
    ["ready", "run", "login"],             // login
    ["messageCreate", "messageSent"]       // message sent
];


let ports_dir = require('./ports/_funkydir');
let ports = fs.readdirSync(ports_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));


ports.forEach( (file) => {
    require(`./ports/${file}`);
});
