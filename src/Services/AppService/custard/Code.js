const AppService = require('../index.js');


AppService.newF("code", function(length=5, characters) {
    let random = this.parent.random;
    if (!characters) characters = "abcdefghijklmnopqrstuvwxyz1234567890-_".split("");
    let code = "";
    
    for (let i = 0; i < length; i++) {
        code += random.choice(characters);
    }

    return code;
});
