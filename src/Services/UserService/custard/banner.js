const UserService = require('../index.js');


UserService.newF("banner", async function(user, settings={}) {
    const client = this.parent;
    const att = new client.AttachmentService;

    let bannerUrl = user.bannerURL(settings.dynamic);

    if (!settings.name) settings.name = `${user.id}-banner`;

    let stuff = att.create(bannerUrl, settings);
    stuff.originUrl = bannerUrl;

    return stuff;
});
