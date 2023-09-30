const { Client } = require('../index.js');


Client.newF("off", function(event, func) {
    if (this.defEvents.has(event)) {
		this.shit.off(event, func);
	}
    else {
        this.events.get(event).listeners.remove(func);
    }
});
