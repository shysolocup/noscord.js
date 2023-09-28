const cl = require('aepl');
const { Soup } = require('stews');

const events = require('./eventing/list.js');

const exp = new Soup(Object);
exp.push("Client", cl.from(Client));


class Client {
    constructor() {

        /* event handling */
        let E = this.Event;
        this.events = new Soup(events);
    }
}


module.exports = exp;
