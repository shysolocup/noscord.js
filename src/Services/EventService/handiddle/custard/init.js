const EventHandler = require('../index.js');


EventHandler.newF("init", async function(name, func, glue=null) {
	let client = this.client;
	
	let event = new client.Event();
	client.events.push(name, event);
	
	if (glue) {
		this._base.on(glue, async function (/**/) {
            await event.fire( await func(...Array.from(arguments)) );
        });
    };
});
