const { Client } = require('../Client/index.js');
const { Soup } = require('stews');


Client.newClass("Event", class {
    constructor() {
        this.listeners = new Soup(Array);
    }

    
    // listener
    listen(func) {
        this.listeners.push(func);
    }

    
    // firing
    fire(/**/) {
        this.listeners.forEach( (lst) => {
            lst(...Array.from(arguments));
        });
    }
});


module.exports = Event;
