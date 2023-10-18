const { Client } = require('../index.js');


Client.newF("off", function(event, func) {
	if (events.includes(event)) {
    		this.events.get(event).listeners.remove(func);
	}
	else {
		this._base.off(event, func);
	}

	return func;
});
