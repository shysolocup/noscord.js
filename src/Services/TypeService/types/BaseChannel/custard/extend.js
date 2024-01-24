const BaseChannel = require('../index.js');


BaseChannel.newF("extend", function(base) {
    return Object.assign(base, this);
});
