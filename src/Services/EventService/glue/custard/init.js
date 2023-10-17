const GlueHandler = require('../index.js');


GlueHandler.newF("init", async function(name, func, glue=null, term=null) {
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
	term = term.bind(this);
	
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
