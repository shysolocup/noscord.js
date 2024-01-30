const Message = require('../index.js');
const { AuditLogEvent } = require('discord.js');


Message.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "util", "types");


    if (ctx.constructor.name == "InteractionResponse") ctx = await ctx.fetch()

    
    // content
    this.content = ctx.content;

    
    // reply
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
    
    this.author = (ctx.author) ? await users.get(ctx.author.id, this.guild) : (ctx.user) ? await users.get(ctx.user.id, this.guild).user : undefined;
    this.member = (ctx.member) ? await users.get(ctx.member.id, this.guild) : (this.author) ? await users.get(this.author.id, this.guild) : undefined;


    if (ctx.author && ctx.author.bot) {
        this.author = new types.User;
        if (ctx.member) this.member = new types.GuildMember;
        
        await this.author.apply(ctx.author);
        if (ctx.member) await this.author.apply(ctx.member);
    }


    // other stuff
    this.createdAt = ctx.createdAt;
    this.type = ctx.type;
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
        edited: (ctx.editedAt) ? new Timestamp(ctx.editedAt) : null,   
    }
    
    this.latency = new Date() - this.timestamps.created.date;

    if (this.raw) return;
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});

	this.client = client;
});
