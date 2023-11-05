const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');


TypeService.newC("UserGroup", class extends Soup {
    constructor(guild) {
        super(Object);

        ( (guild) ? guild.raw.members : this.parent.parent._base.users )
        
        .fetch()
        .catch(e=>{})
        .then( (members) => {
            members = Soup.from(members);
            members.forEach( (id, base) => this.push(id, new this.UserPayload(id, guild, base) ) );
        });
    }
});


module.exports = UserGroup;


let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
