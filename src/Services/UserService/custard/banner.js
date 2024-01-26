const UserService = require('../index.js');


UserService.newF("banner", async function(user, settings={}) {
    const client = this.parent;
    client.import({ att: "attachments" }, "util")

    let bannerUrl = ((user.raw) ? user.raw : user) .bannerURL(settings.dynamic);

    if (!settings.name) settings.name = util.genCode(9);

    let stuff = att.create(bannerUrl, settings);
    stuff.url = bannerUrl;

    return stuff;
});
