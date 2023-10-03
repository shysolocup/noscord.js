const { Client } = require('../index.js');


Client.newF("on", function(event, func) { ( async () => {
	let types = new this.TypeService;
	
	if ((await this.DefEvents).includes(event)) {
		this.shit.on(event, func);
	}
		
	else {
    	this.events.get(event).listen(func);
	}
})()});
