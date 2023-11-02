const Message = require('../index.js');


Message.newF("extend", function(base) {
    return Object.assign(base, this);
});
