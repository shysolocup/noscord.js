const AddonService = require('./index.js');
const { Client } = require('../../Client');


AddonService.newC("Addon", class {
    constructor(className, serviceName, classData) {
        let instances = Client._instances;
        let cl = Client.newC(className, classData);
        
        instances.forEach( (client) => {
            client.services.push(serviceName, new client[className]());
        });
        
        return cl;
    }
});


module.exports = Addon;
