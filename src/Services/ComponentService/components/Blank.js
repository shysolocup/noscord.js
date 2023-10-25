const ComponentService = require('../index.js');


ComponentService.newC("Blank", class {
    constructor(inline=false) {
        return { name: "** **", value: "** **", inline: inline }
    }
});

module.exports = Blank;
