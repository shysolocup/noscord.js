const Sticker = require('../index.js');


Sticker.newF("apply", async function(base) {
    const client = this.parent.parent;
    client.import({ att: "attachments" }, "util", "guilds" );

    // main info
    this.id = base.id;
    this.name = base.name;
    this.description = base.description;
    this.type = base.type;
    this.url = base.url;
    this.attachment = await att.create(this.url);

    // guild
    this.guild = await guilds.get(base.guildId);
    this.guildId = base.guildId;
    
    // random stuff
    this.tags = base.tags;
    this.packId = base.packId;
    this.available = base.available;
	this.animated = (base.format == 2);
    this.format = base.format;
    this.partial = base.partial;

    // timestamps
    this.createdAt = base.createdAt;
    this.timestamps = {
        created: new Timestamp(base.createdAt)
    };

    Object.defineProperty(this, "raw", {
		get() { return base }	
	});
})
