const CommandService = require('../index.js');


CommandService.newP("listPrefix", function() {
	return this.parent.prefixCommands;
});
