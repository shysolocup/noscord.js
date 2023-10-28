const UserService = require('../index.js');


UserService.newF("decor", async function(user, settings={}) {
    const client = this.parent;
    client.import({ att: "attachments" }, "util")

    let decorUrl = user.avatarDecorationURL(settings.dynamic);

    if (!settings.name) settings.name = util.genCode(9);

    let stuff = att.create(decorUrl, settings);
    stuff.url = decorUrl;

    return stuff;
});
