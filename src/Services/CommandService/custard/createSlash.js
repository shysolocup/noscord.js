const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newF("createSlash", function(...args) {

	// error handling
	const client = this.parent;
	client.import({ err: "errors" }, "util");
	let e = err.create(this, "Slash Command Error");


	// getting the function
	let func = args.pop();


	// if there isn't a name given
	if (args.length == 0) e.fire(null, `Name of the command must be given.`)


	// getting the info
	let info = args.shift();
	info = (info instanceof Object) ? info : info.toString();


	// check if it's a function or not
	if (!(func instanceof Function)) e.fire(null, `Last argument must be a function.\ngiven arg: ${func}\n`);


	// string stuff
	if (typeof info == "string") {
		let description = "undefined";
		let nsfw = false;
		let options;
		let cooldown;
		
		if (args.length > 0) {
			args.forEach( (arg) => {
				if ((arg instanceof Object)) options = arg;
				else if (typeof arg == "boolean") nsfw = arg;
				else if ((typeof arg == "number" || typeof arg == "string") && util.parse(arg)) cooldown = arg;
				else if (typeof arg == "string") description = arg;
			});
		}
		
		info = { name: info, description: description, options: options, cooldown: cooldown, nsfw: nsfw };
	}


	// formatting description
	if (info.desc && !info.description) info.description = info.desc
	info.description = (info.description instanceof Object) ? info.description : info.description.toString();


	// option formatting
	if (info.options && info.options instanceof Array) {
		var options = Soup.from(info.options)

		options = options.map( (v) => {


			// typing
			v.type = this.optionType(v.type);
			if (v.desc && !v.description) v.description = v.desc;


			// turning into strings
			if (typeof v.name != "string") v.name = v.name.toString();
			if (typeof v.description != "string") v.description = v.description.toString();


			return v;
		});
	}


	if (info.cooldown) {
		info.cooldown = new this.CooldownHandle(info.cooldown);
	}


	// creates the slash command
	return new this.SlashCommand(info, func);
});
