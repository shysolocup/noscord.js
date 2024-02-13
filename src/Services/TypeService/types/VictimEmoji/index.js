const TypeService = require('../../index.js');
const fs = require('fs');

TypeService.newC("VictimEmoji", class {
    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return `<:${this.name}:${this.id}>`
        }
    }
});

module.exports = VictimEmoji;

let cust_dir = `${__dirname}/custard`;
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
