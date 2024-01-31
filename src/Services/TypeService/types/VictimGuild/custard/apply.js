const VictimGuild = require('../index.js');
const util = require('util');


VictimGuild.newF("apply", async function(ctx, actionType=null) {
    const client = this.parent.parent;
    client.import("types", "messages", "channels", "guilds", "util");

	let guild = new types.Guild;

	await guild.apply(ctx);

	Object.assign(this, guild);
	util.inherits(this.constructor, guild);
	
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


	let pd = Soup.from(Object.getOwnPropertyDescriptors(guild.__proto__));

	for ( let [ prop, data ] of pd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(guild);
            else if (data.get) data.get = data.get.bind(guild);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
});
