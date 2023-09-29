const ComponentService = require('./index.js');


ComponentService.newC("Row", class {
    constructor(/**/) {
        let args = Array.from(arguments);
        let data;

        if (args.length == 1 && args[0].isArray()) {
            data = args[0]
        }
        else {
            data = args;
        }

        return { type: 1, components: data };
    }
});
