const EventService = require('../index.js');
const { Soup } = require('stews');


EventService.newC("EventHandler", class {
    constructor() {
        let client = this.client = this.parent.parent;
        this.types = client.types;
        this._base = client._base;
        
        this.default = client.DefEvents;
        this.custom = client.CustEvents;

        this.events = new Soup(Object);
    }
});


module.exports = EventHandler;


const cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
cust.forEach( (file) => {
    require(`./custard/${file}`);
});
