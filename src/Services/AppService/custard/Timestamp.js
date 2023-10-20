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
	}
});
