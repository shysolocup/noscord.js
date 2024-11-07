const { Client } = require('../../Client');
const { Soup } = require('stews');


Client.newClass("EventListener", class {
    constructor(event, callback, priority=0) {
        this.callback = callback;
        this.event = event;

        this.priority = (typeof priority == "string") 
            ? this.parent._eventPriorities.indexOf(priority.toLowerCase()) 
            : priority;

        if (!this.event.listeners[this.priority]) {
            this.event.listeners.set(this.priority, new Soup(Array));
        }

        this.event.listeners[this.priority].push(this);
    }
})


Client.newClass("Event", class {
    constructor() {
        this.listeners = new Soup(Array);
    }


    // unlisten
    unlisten(listener) {
        this.listeners.forEach( (l, p) => l.forEach( (lst, i) => {
            if (lst == listener || lst.callback == listener) {
                lst.remove(i);
            }
        }));
    }

    
    // listener
    listen(callback, priority) {
        let listener = new this.parent.EventListener(this, callback, priority);
        return listener;
    }

    
    // firing
    fire(...args) {
        let listeners = this.listeners.sort().reverse()

        listeners.forEach( (l, p) => {
            l.forEach( async (lst) => {
                await lst.callback(...args);
            });
        });
    }
});


module.exports = Event;
