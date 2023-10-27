const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newC("CooldownHandle", class {
	constructor(cooldown) {
        const client = this.parent.parent;
        client.import("app");
        
        this.data = new Soup(Object);
        this.active = true;

		this.time = app.parse(cooldown);
		this.timeMs = this.time*1000;

        this.userHandle = this.CooldownUserHandle;
	}
});


module.exports = CooldownHandle;
