const User = require('../index.js');


User.newF("extend", function(base) {
    return Object.assign(base, this);
});
