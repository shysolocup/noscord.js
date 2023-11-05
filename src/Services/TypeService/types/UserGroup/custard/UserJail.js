const UserGroup = require('../index.js');
const deasync = require('deasync');
const User = require('../../User');


UserGroup.newC("UserJail", class {
    constructor(done=false) { 
        deasync.loopWhile( () => !done );
    }
});
