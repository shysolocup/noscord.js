const ErrorService = require('./index.js');


ErrorService.newC("NosError", class {
    constructor(attachment, crash=true) {
        const { stackTraceLimit } = Error;
        Error.stackTraceLimit = 0;
        
        this.attachment = attachment;
        this.crash = crash;
        
        Error.stackTraceLimit = stackTraceLimit;
    }
    
    fire(name, message, crash) {
        
        // capturing the error
        let error = new Error();
        if (this.attachment) Error.captureStackTrace(error, this.attachment);
        
        // settings
        error.name = name;
        error.message = message;
        
        if (crash || this.crash) throw error
        else console.log(error);
    }
});


module.exports = NosError;
