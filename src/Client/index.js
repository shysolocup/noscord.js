const cl = require('aepl');
const { Soup } = require('stews');
const fs = require('fs');

const eventList = require('./Eventing/list.js');

const exp = new Soup(Object);


class Client {
    constructor(token) {
        this.token = token;


        
        /* function compiling */
        let func_dir = require('./functions/funky_dir');
        let functions = fs.readdirSync(func_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
        functions.forEach( (file) => {
            require(`../functions/${file}`);
        });

        

        /* command handling */
        this.commands = new Soup({
            msg: new Soup(Object),
            slash: new Soup(Object)
        });
        

        
        /* event handling */
        this.events = new Soup(Object);
        eventList.forEach( (name) => {
            this.events.push( name, new this.Event() );
        });
        
    }
}


exp.pull("Client", cl.from(Client));
module.exports = exp;
