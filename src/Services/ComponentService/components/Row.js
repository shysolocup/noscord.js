const ComponentService = require('../index.js');


ComponentService.newC("Row", class {
    constructor(/**/) {
        let args = Array.from(arguments);
        let data;


        // if an array is given
        // ie: new Row([ a, b, c]);
        
        if (args.length == 1 && args[0] instanceof Array) {
            data = args[0]
        }


        // if the arguments are kinda just like normal
        // ie: new Row(a, b, c);
        
        else {
            data = args;
        }

        return { type: 1, components: data };
    }
});
