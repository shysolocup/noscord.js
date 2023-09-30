const AppService = require('../index.js');
const { Soup } = require('stews');


AppService.newF("sleep", function(time) {
	return new Promise(resolve => setTimeout(resolve, this.parse(time)*1000));
});
