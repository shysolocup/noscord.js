const { Client } = require('../../Client');
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
    fire(...args) {
        this.listeners.forEach( async (lst) => {
            await lst(...Array.from(...args));
        });
    }
});


module.exports = Event;
