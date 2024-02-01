const TypeService = require('../../index.js');
const fs = require('fs');

TypeService.newC("VictimMessage", class {
    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return this.url
        }
    }
});

module.exports = VictimMessage;

let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
