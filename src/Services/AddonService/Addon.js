const AddonService = require('./index.js');


AddonService.newC("Addon", class {
    constructor() {
        return this.parent.parent.newC(...Array.from(arguments));
    }
});


module.exports = Addon;
