const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newC("SlashCommand", class {
	constructor(info, data) {
		this.info = new Soup(info);
		this.data = data;
	}
});


module.exports = SlashCommand;
