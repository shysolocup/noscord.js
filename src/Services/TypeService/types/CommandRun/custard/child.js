const CommandRun = require('../index.js');


CommandRun.newP("child", function() {
    return this.raw.fetchReply();
});
