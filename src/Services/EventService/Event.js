const { Client } = require('../../Client');
const { Soup } = require('stews');


Client.newClass("EventListener", class {
    constructor(event, callback, priority=3) {
        this.callback = callback
        this.event = event;
        this.priority = (priority instanceof String) 
            ? this.parent._eventPriorities.indexOf(priority.toLowerCase()) 
            : priority;
    }
})


Client.newClass("Event", class {
    constructor() {
        this.client = this.parent;
        this.listeners = new Soup(Object);
    }

    
    // listener
    listen(callback, priority) {
        let listener = new this.client.EventListener(this, callback)

        if (!this.listeners[listener.priority]) {
            this.listeners[listener.priority] = new Soup(Array);
        }

        this.listeners[listener.priority].push(listener);
    }

    
    // firing
    fire(...args) {
        this.listeners.forEach( async (p, l) => l.forEach( async (lst) => {
            await lst.callback(...args);
        }));
    }
});


module.exports = Event;
