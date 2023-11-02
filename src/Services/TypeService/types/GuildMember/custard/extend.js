const GuildMember = require('../index.js');


GuildMember.newF("extend", function(base) {
    return Object.assign(base, this);
});
