const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');


TypeService.newC("UserGroup", class extends Soup {
    constructor() {
        super(Object);

        const client = this.parent.parent;

        return new Proxy(this, {
            get(target, prop) {
                try {
                    if (Number(prop)+1 && Number(prop) <= target.length-1) {
                        let id = target.keys[Number(prop)];
                        return (async () => await client.users.get(id) )();
                    }

                    else if (target.has(prop)) {
                        return (async () => await client.users.get(prop) )();
                    }

                    else return target[prop];

                } catch(e) {
                    return target[prop]
                }
            }
        });
    }

    async init(guild) {
        this.insides = Soup.from(
            await (
                (guild) ? guild.raw.members : this.parent.parent._base.users
            )
            .fetch()
            .catch(e=>{})
        ).map( (id, base) => new this.UserPayload(id, guild) ).pour();
    }
});


module.exports = UserGroup;


let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
