const GlueHandler = require('../index.js');


GlueHandler.newF("init", function(name, func, glue, term) {
	let client = this.client;
	let event = new client.Event();

	if (name instanceof Array) {
		name.forEach( (n) => {
			client.events.push(n, event);
		});
	}
	else {
		client.events.push(name, event);
	}

	func = func.bind(this);
	if (term) term = term.bind(this);
	
	if (glue) {
		this._base.on(glue, async function (/**/) {
			if (term && await term(...Array.from(arguments))) {
            	event.fire( ...await func(...Array.from(arguments)) );
			}
			else if (!term) {
				event.fire( ...await func(...Array.from(arguments)) );
			}
        });
    };

	return event;
});
