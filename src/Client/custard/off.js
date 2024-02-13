const { Client } = require('../index.js');


Client.newF("off", function(event, func) {
	if (event instanceof Array) event.forEach( ev => {
		if (this.events.includes(ev)) {
    		this.events.get(ev).listeners.remove(func);
		}
		else {
			this._base.off(ev, func);
		}
	});
	else {
		if (this.events.includes(event)) {
	    		this.events.get(event).listeners.remove(func);
		}
		else {
			this._base.off(event, func);
		}
	}

	return func;
});
