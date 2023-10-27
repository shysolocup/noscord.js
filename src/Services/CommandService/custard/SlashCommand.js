const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newC("SlashCommand", class {
	constructor(info, data) {
		const client = this.parent.parent;

		info = new Soup(info);

		this.name = info.name;
		this.description = info.description;
		this.options = info.options;
		this.cooldown = info.cooldown;
		this.nsfw = info.nsfw;
			
		this.data = data;

		// adds it to the list
		client.commands.push(this.name, this);
	}

	get info() {
		let stuff = this;
		
		return new Soup({ 
			name: stuff.name, 
			description: stuff.description, 
			options: stuff.options, 
			cooldown: stuff.coolodwn,
			nsfw: stuff.nsfw 
		});
	}
});


module.exports = SlashCommand;
