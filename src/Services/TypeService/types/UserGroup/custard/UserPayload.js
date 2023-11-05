const UserGroup = require('../index.js');
const User = require('../../User');


UserGroup.newC("UserPayload", class {
    constructor(id, guild) {
        const client = this.parent.parent.parent;
        client.import("users");
        var data = {};


        async function payload(user) {
            if (!user) return new this.parent.UserJail(id);
            Object.assign(data, user);
        }
        

        let stuff = payload();

        stuff.finally( () => {
            console.log(stuff);
            users.get(id, guild).then( async (user) => {
                await payload(user);
            })
        })

        return stuff;
    }
});
