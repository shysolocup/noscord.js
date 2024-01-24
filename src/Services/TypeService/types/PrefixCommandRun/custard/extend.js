const PrefixCommandRun = require('../index.js');


PrefixCommandRun.newF("extend", function(base) {
    return Object.assign(base, this);
});
