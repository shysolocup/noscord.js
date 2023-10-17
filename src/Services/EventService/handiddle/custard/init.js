const EventHandler = require('../index.js');


EventHandler.newF("init", (name, func, glue=null) => {
    let types = this.types;
	let client = this.client;
	
	let event = new client.Event();
	client.events.push(name, event);
	
	if (glue && (await this.defaults).includes(glue)) {
		this._base.on(glue, async function (/**/) {
            await event.fire( await func(...Array.from(arguments)) );
        });
    }
});
