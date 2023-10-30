const Message = require('../index.js');


Message.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "util");

    
    // content
    if (!ctx) console.log("it breaks here");
    this.content = ctx.content;
    if (ctx.reference) this.replier = await messages.get(ctx.reference.messageId, ctx.channel)


    // ids
    this.id = ctx.id;
    this.channelId = ctx.channelId;
    this.guildId = ctx.guildId;
    this.webhookId = ctx.webhookId;
    this.appId = ctx.applicationId;
    this.url = `https://discord.com/channels/${ctx.guildId}/${ctx.channelId}/${ctx.id}`;


    // circle thingstuff
    this.guild = await guilds.get(this.guildId);
    this.channel = await channels.get(this.channelId);
    this.author = (ctx.author) ? await users.get(ctx.author.id) : (ctx.user) ? await users.get(ctx.user.id) : undefined;
    this.member = (ctx.member) ? await users.get(ctx.member.id, ctx.guild) : (this.author) ? await users.get(this.author.id, this.guild) : undefined;


    // other stuff
    this.createdAt = ctx.createdAt;
    this.type = ctx.type;
    this.bot = this.author.bot;
    this.system = ctx.system;


    // moderation
    this.editable = ctx.editable;
    this.deletable = ctx.deletable;
    this.purgable = ctx.bulkDeletable;
    this.pinnable = ctx.pinnable;


    // even more stuff
    this.pinned = ctx.pinned;
    this.tts = ctx.tts;
    this.nonce = ctx.nonce;


    // lists
    this.embeds = ctx.embeds;
    this.ephemeral = ctx.ephemeral;
    this.components = ctx.components;
    this.attachments = ctx.attachments ? Soup.from(ctx.attachments.toJSON()) : null;
    this.stickers = ctx.stickers;
    this.files = ctx.files;
    this.flags = ctx.flags;


    // even even more more stuff stuff
    this.position = ctx.position;
    this.mentions = ctx.mentions;
    this.reactions = ctx.reactions;
    this.roleSubData = ctx.roleSubData;
    this.editedAt = ctx.editedTimestamp;
    this.activity = ctx.activity;
    this.reference = ctx.reference;
    this.interaction = ctx.interaction;
    this.cleanContent = ctx.cleanContent;


    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
        edited: new Timestamp(ctx.editedAt),
        
    }
    this.latency = new Date() - this.timestamps.created.date;

    
    this.raw = ctx;
});
