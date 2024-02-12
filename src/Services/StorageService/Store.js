const StorageService = require('./index.js');
var { ChannelType } = require('discord.js');
const { Soup } = require('stews');
const fs = require('fs');


StorageService.newC("Store", class {
    constructor(guildId, storeName, shandle) {
        this.guildId = guildId;
        this.storeName = storeName;
        this.shandle = shandle;
        let stores = this.parent.stores;

        if (!stores.has(guildId)) stores.push(guildId, new Soup(Object));
        stores.push(storeName, {});
        
        return this;
    }
});


module.exports = Store;


let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
