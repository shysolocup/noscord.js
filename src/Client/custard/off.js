const { Client } = require('../index.js');


Client.newF("off", function(event, func) { ( async () => {
	if (this.events.includes(event)) {
		this._base.off(event, func);
	}
	else {
    	this.events.get(event).listeners.remove(func);
	}

	return func;
})()});
