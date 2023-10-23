const AppService = require('../index.js');
const { Soup } = require('stews');


AppService.newC("Timestamp", class {
	constructor(date) {
		let dt = (date instanceof Date) ? date : (date) ? new Date(date) : new Date();

		this.date = dt;
		this.embed = dt.toISOString();
		this.default = `<t:${Math.round(dt.getTime() / 1000)}>`;
		this.shortTime = `<t:${Math.round(dt.getTime() / 1000)}:t>`;
		this.longTime = `<t:${Math.round(dt.getTime() / 1000)}:T>`;
		this.shortDate = `<t:${Math.round(dt.getTime() / 1000)}:d>`;
		this.longDate = `<t:${Math.round(dt.getTime() / 1000)}:D>`;
		this.short = `<t:${Math.round(dt.getTime() / 1000)}:f>`;
		this.long = `<t:${Math.round(dt.getTime() / 1000)}:F>`;
		this.relative = `<t:${Math.round(dt.getTime() / 1000)}:R>`;
		this.raw = `${Math.round(dt.getTime() / 1000)}`;
	}

	latency(msg) {
		console.log(msg.constructor.name);
		if (msg.constructor.name == "ChatInputCommandInteraction") return this.date - msg.createdTimestamp
		else if (msg.constructor.name == "Message") return this.date - msg.timestamps.created.date;
		else if (msg.constructor.name == "MessageEdit") return this.date - msg.timestampes.edited.date;
		else return this.date - msg.createdAt;
	}
	
});
