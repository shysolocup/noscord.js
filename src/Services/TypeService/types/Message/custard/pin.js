const Message = require('../index.js');


Message.newF("pin", function() {
    return this.raw.pin();
});
