const UserGroup = require('../index.js');
const User = require('../../User');


UserGroup.newC("UserPayload", class {
    constructor(id, guild) {
        const client = this.parent.parent.parent;
        client.import("users");
        var data = {};


        async function payload(user) {
            if (!user) return await data;
            Object.assign(data, user);
        }
        

        var stuff = payload();
        stuff.then( () => {
            users.get(id, guild).then( (u) => {
                payload(u);
            })
        })

        return stuff;
    }
});
