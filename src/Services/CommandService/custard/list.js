const CommandService = require('../index.js');


CommandService.newP("list", function() {
	return this.parent.commands;
});
