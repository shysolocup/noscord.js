const UtilService = require('../index.js');


UtilService.newF("numer", function (number, settings={}) {
    if (!(number instanceof Number)) number = parseFloat(number);
    if (!settings.roundTo) settings.roundTo = 0;
    if (!settings.currency) settings.currency = "";

    
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: settings.roundTo
    });

    
    let formatted = formatter.format(number).replace("$", settings.currency);

    
    return new this.Numer(formatted, number, settings.currency, settings.roundTo);
});
