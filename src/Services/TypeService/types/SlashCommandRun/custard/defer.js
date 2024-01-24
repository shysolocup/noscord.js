const SlashCommandRun = require('../index.js');


SlashCommandRun.newF("defer", function(...args) {
    return this.raw.deferReply(...args);
});
