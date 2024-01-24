const CommandService = require('../index.js');


CommandService.newP("listSlash", function() {
	return this.parent.slashCommands;
});
