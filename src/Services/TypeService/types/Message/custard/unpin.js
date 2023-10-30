const Message = require('../index.js');


Message.newF("unpin", function() {
    return this.raw.unpin();
});
