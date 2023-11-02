const UserGroup = require('../index.js');
const User = require('../../User');
const deasync = require('deasync');


UserGroup.newC("UserPayload", class {
    constructor(id, base) {
        const client = this.parent.parent.parent;
        const data = {};

        let thing = (async () => { 
            return await data; // keeps the promise pending
        })();

        thing.finally( function() {
            let user = new client.types.User;
            deasync(user.apply).bind(client.types)(base, guild);
            // client.users.get(id).then( user => Object.assign(data, user) );
        });

        return thing;
    }
});
