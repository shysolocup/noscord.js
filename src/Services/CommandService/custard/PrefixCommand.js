const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newC("PrefixCommand", class {
	constructor(info, data) {
		const client = this.parent.parent;

		info = new Soup(info);

		this.name = info.name;
		this.aliases = info.aliases;
		this.cooldown = info.cooldown;
			
		this.data = data;

		// adds it to the list
		client.prefixCommands.push(this.name, this);
	}

	get info() {
		let stuff = this;
		
		return new Soup({ 
			name: stuff.name,  
			aliases: stuff.aliases,
			cooldown: stuff.cooldown
		});
	}
});


module.exports = SlashCommand;
