const GuildEmoji = require('../index.js');


GuildEmoji.newF("apply", async function(base) {
    const client = this.parent.parent;
    client.import({ att: "attachments" }, "util", "guilds");
    
    this.id = base.id;
    this.name = base.name;
    this.animated = base.animated;
    this.url = base.imageURL('png');
    this.attachment = await att.create(this.url);
    
    const guild = await guilds.get(base.guild.id);
    
    this.author = await users.get(base.author.id, guild);
    this.guild = guild
    this.guildId = guild.id;
    this.identifier = base.identifier;

    this.available = base.available;
    this.deletable = base.deletable;
    this.managed = base.managed;
    this.requiresColons = base.requiresColons

    this.createdAt = base.createdAt;
    this.timestamps = {
        created: new Timestamp(base.createdAt)
    };
})
