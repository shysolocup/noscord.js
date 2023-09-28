const { Client } = require('../Client');
const { Soup } = require('stews');


let stores = new Soup(Object);
Client.newP("stores", stores);


module.exports = stores;
