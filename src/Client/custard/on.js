const { Client } = require('../index.js');


Client.newF("on", function(event, func) { ( async () => {
	let handler = this._handler;
	handler.on(event, func);
})()});
