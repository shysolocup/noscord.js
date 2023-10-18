const UserService = require('../index.js');


UserService.newF("decor", async function(user, settings={}) {
    const client = this.parent;
    const att = new client.AttachmentService;

    let decorUrl = user.avatarDecorationURL(settings.dynamic);

    let stuff = att.create(decorUrl, settings);
    stuff.originUrl = decorUrl;

    return stuff;
});
