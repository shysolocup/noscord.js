const User = require('../index.js');


User.newF("timeout", async function(time, guild) {
    const client = this.parent.parent;
    client.import("app", "errors", "users");
    
    let e = errors.create("Member Timeout");

    let user = await users.get(this.id, guild);
    let thing = user.timeout(app.parseMs(time)).catch(e=>{});

    return thing;
});
