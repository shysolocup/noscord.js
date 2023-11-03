const UserGroup = require('../index.js');
const User = require('../../User');


UserGroup.newC("UserPayload", class {
    constructor(id, guild) {
        const client = this.parent.parent.parent;
        client.import("users");
        var data = {};


        async function payload() {
            if (!this) return await data;
            Object.assign(data, this);
        }
        

        let stuff = payload();

        stuff.finally( () => {
            users.get(id, guild).then( async (user) => {
                await payload.bind(user)();
            })
        })

        return stuff;
    }
});
