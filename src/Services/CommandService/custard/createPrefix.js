const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newF("createPrefix", function(...args) {

	// error handling
	const client = this.parent;
	client.import({ err: "errors" }, "util");
	let e = err.create(this, "Prefix Command Error");


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
		let cooldown;
		let aliases = [];
		
		if (args.length > 0) {
			args.forEach( (arg) => {
				if (arg instanceof Array) aliases = arg;
				else if ((typeof arg == "number" || typeof arg == "string") && util.parse(arg)) cooldown = arg;
			});
		}
		
		info = { name: info, aliases: aliases, cooldown: cooldown };
	}


	if (info.cooldown) {
		info.cooldown = new this.CooldownHandle(info.cooldown);
	}


	// creates the slash command
	return new this.PrefixCommand(info, func);
});
