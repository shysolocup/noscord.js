const GuildMember = require('../index.js');


GuildMember.newF("kick", async function(settings={ /* reason */ }) {
    const client = this.parent.parent;
    client.import("app", "errors", "users");
    
    let e = errors.create("Member Kicking");

    let user = await users.get(this.id, this.guild);
    if (!user.bannable) e.fire(null, "User cannot be kicked");
    else {
        let thing = user.kick(settings).catch(e=>{});
        return thing;
    }
});
