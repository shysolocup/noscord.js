const AppService = require('../index.js');


AppService.newF("format", function(string) {
	let t = string.split("");
	let thing = t.pop();

	if (thing == "s") { return `${t.join("")} seconds`; }
	else if (thing == "ms") { return `${t.join("")} milliseconds`; }
	else if (thing == "m") { return `${t.join("")} minutes`; }
	else if (thing == "h") { return `${t.join("")} hours`; }
	else if (thing == "d") { return `${t.join("")} days`; }
	else if (thing == "w") { return `${t.join("")} weeks`; }
	else if (thing == "y") { return `${t.join("")} years`; }
});
