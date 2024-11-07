const { Client } = require('../index.js');


Client.newF("onPriority", function(priority, ...args) {
	return this.on(...args, priority)
});
