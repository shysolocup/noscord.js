const UtilService = require('../index.js');
const { Soup } = require('stews');


UtilService.newC("Numer", class {
	constructor(number, settings={}) {
		if (!(number instanceof Number)) number = parseFloat(number);
	    if (!settings.roundTo) settings.roundTo = 0;
	    if (!settings.currency) settings.currency = "";
	    
	    let formatter = new Intl.NumberFormat('en-US', {
	        style: 'currency',
	        currency: 'USD',
	        maximumFractionDigits: settings.roundTo
	    });
	    
	    this.value = formatter.format(number).replace("$", settings.currency);
		
        this.raw = number;
        this.currency = settings.currency;
        this.roundTo = settings.roundTo;
        
        this.even = (this.raw % 2 == 0);
        this.odd = (this.raw % 2 == 1);
        
        
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



UtilService.newF("numer", function (...args) {
    return new this.Numer(...args);
});



module.exports = Numer;
