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
	}

	get timestamp() {
		return new Timestamp( new Date( Date.now() + this.timeMs ) );
	}

	cool(user) {
		if (this.active) {
			let handle = new this.CooldownUserHandle(user);
			this.data.push(user.id, handle);
			return handle;
		}
	}
});


module.exports = CooldownHandle;
