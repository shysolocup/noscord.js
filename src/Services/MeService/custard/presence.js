const MeService = require('../index.js');


MeService.newF("presence", function(presence) {
    const client = this.parent;

    if (client.user) client.user.setPresence(presence);
    else client.presence = presence;

    return presence;
})
