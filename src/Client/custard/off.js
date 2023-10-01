const { Client } = require('../index.js');


Client.newF("off", function(event, func) { ( async () => {
	if ((await this.DefEvents).includes(event)) {
		this.shit.off(event, func);
	}
	else {
    	this.events.get(event).listeners.remove(func);
	}
})()});
