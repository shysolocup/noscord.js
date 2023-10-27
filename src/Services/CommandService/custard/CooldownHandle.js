const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newC("CooldownHandle", class {
	constructor(cooldown) {
        const client = this.parent.parent;
        client.import("app");
        
        this.data = new Soup(Object);
        this.active = true;

        this.userHandle = this.CooldownUserHandle;

        this.time = app.parse(cooldown);
	}
});


module.exports = CooldownHandle;
