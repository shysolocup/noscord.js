const { Client } = require('../index.js');
const { Soup } = require('stews');


Client.newF("import", function(/**/) {
    let args = Array.from(arguments);
    let defs = new Soup(Object);


    args.forEach( (arg) => {

        if (arg instanceof Object && !(arg instanceof Array)) {
            let stuff = Soup.from(arg);

            stuff.forEach( (name, service) => {
                defs.push(name, this.services[service]);
            })
        }

        else if (arg instanceof Array) {
            let stuff = Soup.from(arg);

            stuff.forEach( (service) => {
                defs.push(service, this.services[service]);
            })
        }

        else {
            defs.push(arg, this.services[arg]);
        }
    });

    
    defs.map( (name, service) => {
        return this.services[service];
    });


    return new Function("services", `
        return [${defs.keys.join(",")}] = services;
    `)(defs.values);
});
