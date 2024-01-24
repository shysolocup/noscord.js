const PrefixCommandRun = require('../index.js');


PrefixCommandRun.newF("unpin", function() {
    return this.raw.unpin();
});
