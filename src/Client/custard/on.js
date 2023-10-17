const { Client } = require('../index.js');


Client.newF("on", function(event, func) { ( async () => {
	if (this.events.has(event)) {
		this.events.get(event).listen(func);
	}

	else {
		this._base.on(event, func);
	}

	return func;
})()});
