const GuildMember = require('../index.js');


GuildMember.newF("unban", async function(guild, settings={ /* reason and duration */ }) {
    const client = this.parent.parent;
    client.import("app", "errors", "users");
    
    let e = errors.create("User Unbanning");

    let user = await users.get(this.id, guild);
    let thing = user.unban(settings).catch(e=>{});

    if (settings.duration) setTimeout( () => {
         user.ban({ reason: (settings.durReason) ? settings.durReason : "duration" });
    }, app.parseMs(settings.duration) );

    return thing;
});
