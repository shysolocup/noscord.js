const AppService = require('../index.js');


AppService.newF("parseMs", function(string) {
	if (typeof string != "string") {
		return parseFloat(string)*1000;
	}
	let t = string.split("");
	let thing = t.pop();

	if (thing == "s") { return parseFloat(t.join("")); }
	else if (thing == "ms") { return parseFloat(t.join(""))*1000; }
	else if (thing == "m") { return parseFloat(t.join(""))*60*1000; }
	else if (thing == "h") { return parseFloat(t.join(""))*60*60*1000; }
	else if (thing == "d") { return parseFloat(t.join(""))*60*60*24*1000; }
	else if (thing == "w") { return parseFloat(t.join(""))*60*60*24*7*1000; }
	else if (thing == "y") { return parseFloat(t.join(""))*60*60*24*365*1000; }
	else { return parseFloat(string)*1000; }
});
