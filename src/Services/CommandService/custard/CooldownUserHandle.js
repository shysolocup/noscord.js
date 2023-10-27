const CooldownHandle = require('./CooldownHandle.js');
const { Soup } = require('stews');


CooldownHandle.newC("CooldownUserHandle", class {
	constructor(user) {
        const client = this.parent.parent.parent;
        client.import("app");

        this.user = user;
        this.time = this.parent.time;
        this.timeMs = this.parent.timeMs;
        this.start = new Timestamp();
        this.end = new Timestamp(new Date( Date.now() + this.timeMs ));
        
        this.data = this.parent.data;
	}

    remove() {
        this.data.remove(user.id);
    }

    get remaining() {
        return this.end.now - this.start.now
    }
});


module.exports = CooldownHandle;
