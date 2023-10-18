const MeService = require('../index.js');


MeService.newF("status", function(status) {
    const client = this.parent;

    if (client.user) client.user.setStatus(status);
    else client.status = status;

    return status;
})
