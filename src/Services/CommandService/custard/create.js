const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newF("create", function(info={name:null, description:null, options:null, cooldown:null, nsfw:false}, dataA, dataB=null) {
	const client = this.parent;
	client.import({ err: "errors" });
	
	let e = err.create(this, "Slash Command Creation");
	
	if (typeof info == "string") {
		let thing = info;
		info = { name: thing, description:null, options:null, nsfw:false };
	}

	if (info.options && info.options instanceof Array) {
		var options = Soup.from(info.options)

		options = options.map( (v) => {
			v.type = this.optionType(v.type);
			if (v.desc && !v.description) v.description = v.desc;
			return v;
		})
	}

	if (info.desc && !info.description) info.description = info.desc

	var data
	if (typeof dataA == "string" && !info.description) {
		info.description = dataA
		data = dataB
	}
	else if (info.description) {
		data = dataA
	}
	
	
	var [name, description] = [info.name, info.description];
	
	if (!name || typeof name != "string" || name.length <= 0) {
		e.fire(null, "Invalid slash command name.\n\nPossible reasons:\n    • doesn't exist\n    • not a string\n    • blank string\n\nActual error stuff:");
	}

	if (!description || typeof description != "string" || description.length <= 0) {
		e.fire(null, "Slash Command Creation", "Invalid slash command description.\n\nPossible reasons:\n    • not a string\n    • blank string\n\nActual error stuff:");
	}

	let cmd = new this.SlashCommand(info, data);
	
	this.parent.commands.push(cmd.info.name, cmd);
});
