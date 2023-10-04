const Message = require('../index.js');


Message.newF("reply", function() { (async (/**/) => {
    let msg = this.raw;
    let args = Array.from(this.arguments);
    let [content, settings] = [ "", {} ];

    if (args.length > 1) {
        args.forEach( (arg) => {
            if (typeof arg == "string") settings.content = arg;
            if (arg instanceof Object && !(arg instanceof Array)) settings = Object.entries(settings).forEach( (a) => {
                let [key, val] = a;
                settings[key] = val;
            });
        });
    }
    
    if (args[0] instanceof Array) {
        args[0] = args[0].join(",");
    }

    if (args[0] instanceof Number) {
        args[0] = parseFloat(args[0]);
    }
    
    if (args[0] instanceof Object) {
        
    }
})(); });
