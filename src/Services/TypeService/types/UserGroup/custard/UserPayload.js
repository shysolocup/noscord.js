const UserGroup = require('../index.js');
const User = require('../../User');


UserGroup.newC("UserPayload", class {
    constructor(id, guild) {
        const client = this.parent.parent.parent;
        client.import("users");
        var data = {};


        const payload = async (user) => {
            if (!user) return new this.parent.UserJail();
            Object.assign(data, user);
        }
        

        let stuff = payload();

        stuff.finally( (jail) => {
            jail.done = true;
            users.get(id, guild).then( async (user) => {
                await payload(user);
            })
        })

        return stuff;
    }
});
