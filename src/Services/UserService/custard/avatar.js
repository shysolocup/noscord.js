const UserService = require('../index.js');


UserService.newF("avatar", async function(user, settings={}) {
    const client = this.parent;
    client.import({ att: "attachments" }, "util");

    let raw = ((user.raw) ? user.raw : user)
    let avatarUrl = raw.displayAvatarURL(settings.dynamic);

    if (!settings.name) settings.name = util.genCode(9);

    let stuff = att.create(avatarUrl, settings);
    stuff.url = avatarUrl;

    return stuff;
});
