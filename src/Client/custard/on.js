const { Client } = require('../index.js');


Client.newF("on", function(event, func) { ( async () => {
	let handler = this._handler;
	return await handler.on(event, func);
})()});
