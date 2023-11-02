const UserGroup = require('../index.js');


UserGroup.newC("UserPayload", class {
    constructor(id) {
        const client = this.parent.parent.parent;

        var data = {};
        let thing = (async () => { return await data; })(); // keeps the promise pending

        thing.finally( async () => {
            let user = client.users.get(id);
            Object.assign(data, user) // let user = await client.users.get(id);
        });

        return thing;
    }
});

module.exports = UserPayload;
