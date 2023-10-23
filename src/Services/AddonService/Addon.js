const AddonService = require('./index.js');
const { Client } = require('../../Client');


AddonService.newC("Addon", class {
    constructor(className, importName, classData) {
        let instances = Client._instances;
        let cl = Client.newC(className, classData);
        
        instances.forEach( (client) => {
            client.services.push(importName, new client[ClassName]());
        });
        
        return cl;
    }
});


module.exports = Addon;
