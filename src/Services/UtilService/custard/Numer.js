const UtilService = require('../index.js');
const { Soup } = require('stews');


UtilService.newC("Numer", class {
	constructor(formatted, raw, currency, roundTo) {
		this.value = formatted;
        this.raw = raw;
        this.currency = currency;
        this.roundTo = roundTo;
        
        this.even = (raw % 2 == 0);
        this.odd = (raw % 2 == 1);
        
        
        return new Proxy(this, {
            get(target, prop) {
                if (target.value[prop]) return target.value[prop].bind(target.value);
                else if (target.raw[prop]) return target.raw[prop].bind(target.raw);
                else return target[prop];
            } 
        });
	}

    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return this.value;
        }

        if (hint == "default") {
            return this.raw;
        }
    }
});


module.exports = Numer;
