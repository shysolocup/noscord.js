const PrefixCommandRun = require('../index.js');


PrefixCommandRun.newF("pin", function() {
    return this.raw.pin();
});
