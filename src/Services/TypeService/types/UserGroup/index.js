const TypeService = require('../../index.js');
const fs = require('fs');

TypeService.newC("UserGroup", class {
    constructor(guild) {
        this.client = this.parent.parent;
        this.guild = guild;
    }
});

module.exports = UserGroup;

let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
