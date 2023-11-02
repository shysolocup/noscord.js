const TypeService = require('../../index.js');
const fs = require('fs');


TypeService.newC("UserGroup", class {
    async init(guild) {

        this.client = this.parent.parent;
        this.guild = guild;
        this.ids = Soup.from(
            await (
                (this.guild) ? this.guild.raw.members : this.client._base.users
            )
            .fetch()
            .catch(e=>{})
        ).keys;
    }
});


module.exports = UserGroup;

/*
let cust_dir = require('./custard/_funkydir');
const { Soup } = require('stews');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
*/
