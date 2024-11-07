const { Client } = require('../index.js');


Client.newF("on", function(event, callback, priority) {
	if (event instanceof Array) {
		event.forEach( (e) => {
			if (this.events.has(e)) {
				return this.events.get(e).listen(callback, priority);
			}

			else {
				return this._base.on(e, callback);
			}
		})
	}
	else {
		if (this.events.has(event)) {
			return this.events.get(event).listen(callback, priority);
		}

		else {
			return this._base.on(event, callback);
		}
	}

	return callback;
});
