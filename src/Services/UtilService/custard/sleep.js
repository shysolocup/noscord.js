const UtilService = require('../index.js');
const { Soup } = require('stews');


UtilService.newF("sleep", function(time) {
	return new Promise(resolve => setTimeout(resolve, this.parse(time)*1000));
});
