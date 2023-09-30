const { Client } = require('../index.js');


Client.newF("on", function(event, func) {
	if (this.defEvents.has(event)) {
		this.shit.on(event, func);
	}
	else {
    	this.events.get(event).listen(func);
	}
});
