const { Client } = require('../index.js');
const { Soup } = require('stews');


Client.newF("import", function(/**/) {
    let args = Soup.from(Array.from(arguments));


    // if it's an object ({ name: "service" })
    if (args.length == 1 && args[0] instanceof Object && !(args[0] instanceof Array)) {
        let stuff = Soup.from(args[0]);
        let services = stuff.values;


        services = services.map( (service) => {
            return this.services[service];
        });


        return new Function("services", `
            return [${stuff.keys.join(",")}] = services;
        `)(services);
    }
    

    // if it's an array ([ "service" ])
    else if (args.length == 1 && args[0] instanceof Array) {
        let stuff = Soup.from(args[0]);
        let services = new Soup(Object);


        stuff.forEach( (service) => {
            services.push(service, this.services[service]);
        });


        return new Function("services", `
            return [${services.keys.join(",")}] = services;
        `)(services.values);
    }


    // if it just uses arguments
    else {
        let services = new Soup(Object);


        args.forEach( (service) => {
            services.push(service, this.services[service]);
        });


        return new Function("services", `
            return [${services.keys.join(",")}] = services;
        `)(services.values);
    }
});
