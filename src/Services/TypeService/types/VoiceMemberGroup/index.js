const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');


TypeService.newC("VoiceMemberGroup", class extends Soup {
    constructor(guild) {
        super(Object);
    }
});


module.exports = VoiceMemberGroup;


let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
