const UserGroup = require('../index.js');
const User = require('../../User');


UserGroup.newC("UserJail", class {
    constructor(id) { return (async () => {
            const client = this.parent.parent.parent;
            client.import("users");
            
            await client._base.users.fetch(id);

            return id;
        })();
    }
});
