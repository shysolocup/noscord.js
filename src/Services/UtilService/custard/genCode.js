const UtilService = require('../index.js');


UtilService.newF("genCode", function(length=5, characters=null) {
    let random = this.random;
    if (!characters) characters = "abcdefghijklmnopqrstuvwxyz1234567890-_".split("");
    let code = "";
    
    for (let i = 0; i < length; i++) {
        code += random.choice(characters);
    }

    return code;
});
