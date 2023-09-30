const CommandService = require('../index.js');


CommandService.newC("SlashCommand", class {
	constructor(info, data) {
		this.info = info;
		this.data = data;
	}
});


module.exports = SlashCommand;
