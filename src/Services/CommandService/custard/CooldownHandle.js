const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newC("CooldownHandle", class {
	constructor(cooldown) {
    	const client = this.parent.parent;
        client.import("util");
        
        this.data = new Soup(Object);
        this.active = true;

		this.time = util.parse(cooldown);
		this.timeMs = this.time*1000;
	}

	get timestamp() {
		return new Timestamp( new Date( Date.now() + this.timeMs ) );
	}

	add(user) {
		if (this.active) {
			let handle = new this.CooldownUserHandle(user);
			this.data.push(user.id, handle);
			return handle;
		}
	}

	remove(user) {
		let handle = this.data.get( (user.id) ? user.id : user );
		handle.remove();
		return handle;
	}
	
	get(user) {
		return this.data.get( (user.id) ? user.id : user );
	}

	has(user) {
		return this.data.has( (user.id) ? user.id : user );
	}

	wipe() {
		let stuff = this.data.copy();
		this.data = this.data.clear();
		return stuff;
	}
});


module.exports = CooldownHandle;
