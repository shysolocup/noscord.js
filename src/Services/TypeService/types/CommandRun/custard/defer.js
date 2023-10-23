const CommandRun = require('../index.js');


CommandRun.newF("defer", function(...args) {
    let run = this.raw;
    return run.deferReply(...args);
});
