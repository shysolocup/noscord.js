const GuildMember = require('../index.js');


GuildMember.newF("ban", async function(settings={ /* reason and duration */ }) {
    const client = this.parent.parent;
    client.import("app", "errors", "users");
    
    let e = errors.create("Member Banning");

    let user = await users.get(this.id, this.guild);
    if (!user.bannable) e.fire(null, "User cannot be banned");
    else {
        let thing = user.kick(settings).catch(e=>{});

        if (settings.duration) setTimeout( () => {
             user.guild.members.unban(user.id);
        }, app.parseMs(settings.duration) );

        return thing;
    }
});
