const CooldownHandle = require('./CooldownHandle.js');
const { Soup } = require('stews');


CooldownHandle.newC("CooldownUserHandle", class {
	constructor(user) {
        const client = this.parent.parent.parent;
        client.import("util");

        this.user = user;
        this.time = this.parent.time;
        this.timeMs = this.parent.timeMs;
        this.start = new Timestamp();
        this.end = new Timestamp(new Date( Date.now() + this.timeMs ));
        
        this.data = this.parent.data;

		this.timeout = setTimeout( () => {
			
			this.data.remove(this.user.id);
			clearTimeout(this.timeout);
			
		}, this.timeMs );
	}

    remove() {
		clearTimeout(this.timeout);
        this.data.remove(this.user.id);
    }

	get remaining() {
        return (this.end.now - Date.now())/1000;
    }

    get remainingMs() {
        return this.end.now - Date.now();
    }
});


module.exports = CooldownUserHandle;
