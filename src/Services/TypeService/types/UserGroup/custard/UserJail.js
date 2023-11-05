const UserGroup = require('../index.js');
const deasync = require('deasync');
const User = require('../../User');


UserGroup.newC("UserJail", class {
    constructor(id) {
        const client = this.parent.parent.parent;
        client.import("users");

        this.id = id;
        this.done = false;

        setImmediate( () => {
            deasync.loopWhile( () => !this.done );  
        });

        return client._base.users.fetch(id).finally( () => {
            this.done = true;
        });
    }
});
