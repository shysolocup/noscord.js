const { Soup } = require('stews');
const SelectMessageGroup = require('../index.js');
const pend = require('pender');

const { Noodle } = require('stews');


SelectMessageGroup.newF("apply", async function(obj) {
    const client = this.parent.parent;
    client.import("channels", "messages");

    let stuff = Soup.from(obj);
    let bases = new Soup(Object);
  

    stuff.forEach( (id, base) => {
        bases.push(id, base);
        this.push(id, pend( () => messages.get(id, base.channel), `<${id}>` ))
    });


    Object.defineProperties(this, {
        equals: { value: (content) => this.filter( id => bases[id].content == content ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].content)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].content)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].content)).endsWith(...args) ) },
    });
})
