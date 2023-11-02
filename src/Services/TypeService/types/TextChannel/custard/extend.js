const Channel = require('../index.js');


Channel.newF("extend", function(base) {
    return Object.assign(base, this);
});
