const UtilService = require('../index.js');


UtilService.newF("pad", function (...args) {
    return new this.Pad(...args);
});
