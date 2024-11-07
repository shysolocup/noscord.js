const { Client } = require('../index.js');


Client.newF("off", function(event, listener) {
	if (event instanceof Array) event.forEach( ev => {
		if (this.events.includes(ev)) {
    		this.events.get(ev).unlisten(listener);
		}
		else {
			this._base.off(ev, listener);
		}
	});
	else {
		if (this.events.includes(event)) {
			this.events.get(event).unlisten(listener);
		}
		else {
			this._base.off(event, listener);
		}
	}

	return listener;
});
