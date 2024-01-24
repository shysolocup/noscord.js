const TextChannel = require('../index.js');


TextChannel.newF("extend", function(base) {
    return Object.assign(base, this);
});
