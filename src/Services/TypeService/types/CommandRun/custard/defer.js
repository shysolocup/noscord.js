const CommandRun = require('../index.js');


CommandRun.newF("defer", function(...args) {
    return this.raw.deferReply(...args);
});
