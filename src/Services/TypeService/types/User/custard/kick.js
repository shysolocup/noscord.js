const User = require('../index.js');


User.newF("kick", async function(guild, settings={ /* reason */ }) {
    const client = this.parent.parent;
    client.import("app", "errors", "users");
    
    let e = errors.create("User Kicking");

    let user = await users.get(this.id, guild);
    if (!user.bannable) e.fire(null, "User cannot be kicked");
    else {
        let thing = user.kick(settings).catch(e=>{});
        return thing;
    }
});
