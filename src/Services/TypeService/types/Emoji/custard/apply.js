const Emoji = require('../index.js');


Emoji.newF("apply", async function(base) {
    const client = this.parent.parent;
    client.import({ att: "attachments" }, "util");

    // info
    this.id = base.id;
    this.name = base.name;
    this.animated = base.animated;
    this.url = (this.animated) ? base.imageURL('gif') : base.imageURL('png');
    this.attachment = await att.create(this.url);
    this.identifier = base.identifier;

	if (base.author) {
		this.author = await users.get(base.author.id, guild);
	}
	if (base.guild) {
		this.guild = await guilds.get(base.guild.id);
		this.guildId = base.guild.id;
	}

	this.available = base.available;
    this.deletable = base.deletable;
    this.managed = base.managed;
    this.requiresColons = base.requiresColons

    // timestamps
    this.createdAt = base.createdAt;
    this.timestamps = {
        created: new Timestamp(base.createdAt)
    };

    Object.defineProperty(this, "raw", {
		get() { return base }	
	});

	this.client = client;
})
