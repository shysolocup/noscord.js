const UserService = require('../index.js');


UserService.newF("avatar", async function(user, settings={}) {
    const client = this.parent;
    client.import({ att: "attachments" }, "util");

    let avatarUrl = user.displayAvatarURL(settings.dynamic);

    if (!settings.name) settings.name = util.genCode(9);

    let stuff = att.create(avatarUrl, settings);
    stuff.url = avatarUrl;

    return stuff;
});
