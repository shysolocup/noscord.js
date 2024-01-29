const { Soup } = require('stews');
const MessageGroup = require('../index.js');
const pend = require('pender');

const { Noodle } = require('stews');


MessageGroup.newF("apply", async function(channel) {
    const client = this.parent.parent;
    client.import("channels", "messages");

    let stuff = new Soup(await channel.messages.fetch());
    let pins = new Soup(await channel.messages.fetchPinned());
    let bases = new Soup(Object);
  

    stuff.forEach( (id, base) => {
        bases.push(id, base);
        this.push(id, pend( () => messages.get(id, channel), `<${id}>` ))
    });


    Object.defineProperties(this, {
        pins: { get: () => pins },
        
        equals: { value: (content) => this.filter( id => bases[id].content == content ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].content)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].content)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].content)).endsWith(...args) ) },
    })
})
