const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');


TypeService.newC("ChannelGroup", class extends Soup {
    constructor(guild) {
        super(Object);
    }
});


module.exports = ChannelGroup;


let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
