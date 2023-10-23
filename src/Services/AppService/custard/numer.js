const AppService = require('../index.js');


AppService.newF("numer", function (number, settings={}) {
    if (!(number instanceof Number)) number = parseFloat(number);
    if (!settings.round) settings.round = 0;
    if (!settings.currency) settings.currency = "";

    
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: settings.round
    });

    
    let formatted = formatter.format(number).replace("$", settings.currency);

    
    return new this.Numer(formatted, number, settings.currency, settings.round);
});
