const AppService = require('../index.js');


AppService.newF("numer", function (number, settings={}) {
    if (!(number instanceof Number)) number = parseFloat(number);
    if (!settings.round) settings.round = 0;
    if (!settings.currency) settings.currency = "";
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: settings.round
    });
    
    return formatter.format(number).replace("$", settings.currency);
});
