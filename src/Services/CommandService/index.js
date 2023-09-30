const { Client } = require('../../Client');

Client.newC("CommandService");

CommandService.newP("list", function() {
	return this.parent.commands;
});

module.exports = CommandService;

require('./Command.js');
