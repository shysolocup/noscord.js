const UserGroup = require('../index.js');
const User = require('../../User');
const deasync = require('deasync');


UserGroup.newC("UserPayload", class {
    constructor(id, guild) {
        const client = this.parent.parent.parent;
        const data = {};

        let thing = (async () => { 
            return await data; // keeps the promise pending
        })();

        thing.finally( function() {
            deasync(client.users.get).bind(client.users)(id, guild);
            // client.users.get(id).then( user => Object.assign(data, user) );
        });

        return thing;
    }
});
