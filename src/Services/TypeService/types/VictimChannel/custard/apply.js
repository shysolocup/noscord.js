const VictimChannel = require('../index.js');
const { Soup } = require('stews');


VictimChannel.newF("apply", async function(ctx, actionType=null) {
    const client = this.parent.parent;
    client.import("types", "messages", "channels", "guilds", "util");

	let channel = channels.typer(ctx.type);
	await channel.apply(ctx);

	Object.assign(this, channel);
	
	this.created = (actionType == 0);
    this.deleted = (actionType == 1);
    this.edited = (actionType == 2);


    // times
	let created = this.created;
    let deleted = this.deleted;
    let edited = this.edited;
    
    this.timestamps.created = (created) ? new Timestamp() : undefined;
	this.timestamps.deleted = (deleted) ? new Timestamp() : undefined;
    this.timestamps.edited = (edited) ? new Timestamp() : undefined;


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

	
	let pd = Soup.from(Object.getOwnPropertyDescriptors(channel.__proto__));

	for ( let [ prop, data ] of pd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(channel);
            else if (data.get) data.get = data.get.bind(channel);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
});
