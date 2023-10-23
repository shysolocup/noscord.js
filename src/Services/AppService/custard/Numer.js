const AppService = require('../index.js');
const { Soup } = require('stews');


AppService.newC("Numer", class {
	constructor(formatted, currency, round, raw) {
		this.value = formatted;
        this.currency = currency;
        this.round = round;
        this.raw = raw;
	}

    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return this.value;
        }

        if (hint == "number") {
            return this.raw;
        }
    }
});
