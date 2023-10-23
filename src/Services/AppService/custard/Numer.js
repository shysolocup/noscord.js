const AppService = require('../index.js');
const { Soup } = require('stews');


AppService.newC("Numer", class {
	constructor(formatted, raw, currency, round) {
		this.value = formatted;
        this.raw = raw;
        this.currency = currency;
        this.round = round;
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
