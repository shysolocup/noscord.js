const UserService = require('../index.js');


UserService.newF("avatar", async function(user, settings={}) {
    const client = this.parent;
    client.import({ att: "attachments" }, "app");

    let avatarUrl = user.displayAvatarURL(settings.dynamic);

    if (!settings.name) settings.name = app.genCode(9);

    let stuff = att.create(avatarUrl, settings);
    stuff.originUrl = avatarUrl;

    return stuff;
});
