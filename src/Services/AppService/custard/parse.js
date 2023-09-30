const AppService = require('../index.js');


AppService.newF("parse", function(string) {
	if (typeof string != "string") {
		return parseFloat(string);
	}
	let t = string.split("");
	let thing = t.pop();

	if (thing == "s") { return parseFloat(t.join("")); }
	else if (thing == "ms") { return parseFloat(t.join(""))*1000; }
	else if (thing == "m") { return parseFloat(t.join(""))*60; }
	else if (thing == "h") { return parseFloat(t.join(""))*60*60; }
	else if (thing == "d") { return parseFloat(t.join(""))*60*60*24; }
	else if (thing == "w") { return parseFloat(t.join(""))*60*60*24*7; }
	else if (thing == "y") { return parseFloat(t.join(""))*60*60*24*365; }
	else { return parseFloat(string); }
});
