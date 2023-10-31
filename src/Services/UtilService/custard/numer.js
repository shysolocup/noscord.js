const UtilService = require('../index.js');


UtilService.newF("numer", function (...args) {
    return new this.Numer(...args);
});
