const cl = require('aepl');
const { Soup } = require('stews');
const fetch = import('fetch');

const eventList = require('./Eventing/list.js');

const exp = new Soup(Object);
exp.push("Client", cl.from(Client));


class Client {
    constructor(token) {
        this.token = token;


        // command handling
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

    
    // creates event listener
    on(event, func) {
        this.events.get(event).listen(func);
    }


    // remove event listener
    off(event, func) {
        this.events.get(event).listeners.remove(func);
    }


    // login
    login() {
        this.shit.login(this.token);
    }
}


module.exports = exp;
