const cl = require('aepl');
const { Soup } = require('stews');
const fs = require('fs');

const eventList = require('../Services/EventService/list.js');

const exp = new Soup(Object);


class WumpCliClient {
    constructor() {
        this.token = undefined;
        
        
        /* service compiling */
        let serv_dir = require('../Services/_funkydir');
        const Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

        Services.forEach( (folder) => {
            require(`../Services/${folder}`);
        });


        
        /* function compiling */
        let func_dir = require('./functions/_funkydir');
        let functions = fs.readdirSync(func_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        functions.forEach( (file) => {
            require(`./functions/${file}`);
        });

        

        /* command handling */
        this.commands = new Soup(Object);
        

        
        /* event handling */
        this.events = new Soup(Object);
        eventList.forEach( (name) => {
            this.events.push( name, new this.Event() );
        });
        
    }
}


exp.pull("Client", cl.from(WumpCliClient));
module.exports = exp;
