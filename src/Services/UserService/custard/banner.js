const UserService = require('../index.js');


UserService.newF("banner", async function(user, settings={}) {
    const client = this.parent;
    const att = new client.AttachmentService;

    let bannerUrl = user.bannerURL(settings.dynamic);

    let stuff = att.create(bannerUrl, settings);
    stuff.originUrl = bannerUrl;

    return stuff;
});
