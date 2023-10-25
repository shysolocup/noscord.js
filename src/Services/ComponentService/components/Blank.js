const ComponentService = require('../index.js');


ComponentService.newC("Blank", class {
    constructor(inline=false) {
        { name: "** **", value: "** **", inline: inline }
    }
});

module.exports = Blank;
