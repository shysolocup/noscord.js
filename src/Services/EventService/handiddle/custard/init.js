const EventHandler = require('../index.js');


EventHandler.newF("init", async function(name, func, glue=null, term=null) {
	let client = this.client;
	
	let event = new client.Event();
	client.events.push(name, event);

	func = func.bind(this);
	
	if (glue) {
		this._base.on(glue, async function (/**/) {
			if (term && await term(...Array.from(arguments))) {
            	event.fire( ...await func(...Array.from(arguments)) );
			}
			else {
				event.fire( ...await func(...Array.from(arguments)) );
			}
        });
    };
});
