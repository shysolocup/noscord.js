const Guild = require('../index.js');


Guild.newF("extend", function(base) {
    return Object.assign(base, this);
});
