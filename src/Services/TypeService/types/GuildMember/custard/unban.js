const GuildMember = require('../index.js');


GuildMember.newF("unban", async function(settings={ /* reason and duration */ }) {
    const client = this.parent.parent;
    client.import("app", "errors", "users");
    
    let e = errors.create("Member Unbanning");

    let user = await users.get(this.id, this.guild);
    let thing = user.unban(settings).catch(e=>{});

    if (settings.duration) setTimeout( () => {
         user.ban(user.id);
    }, app.parseMs(settings.duration) );

    return thing;
});
