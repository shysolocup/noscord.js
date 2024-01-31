const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');


TypeService.newC("MessageGroup", class extends Soup {
    constructor(guild) {
        super(Object);
    }
});


module.exports = MessageGroup;


let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
