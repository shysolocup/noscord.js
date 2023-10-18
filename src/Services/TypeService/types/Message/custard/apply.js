const Message = require('../index.js');


Message.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users");

    
    // content
    this.content = ctx.content;
    if (ctx.reference) this.replier = await messages.get(ctx.reference.messageId, ctx.channel)


    // ids
    this.id = ctx.id;
    this.channelId = ctx.channelId;
    this.guildId = ctx.guildId;
    this.webhookId = ctx.webhookId;
    this.appId = ctx.applicationId;
    this.url = `https://discord.com/channels/${ctx.guild.id}/${ctx.channel.id}/${ctx.id}`;


    // circle thingstuff
    this.guild = await guilds.get(this.guildId);
    this.channel = await channels.get(this.channelId);
    this.author = (ctx.author) ? ctx.author : (ctx.user) ? ctx.user : undefined;
    this.member = (ctx.member) ? ctx.member : await users.get(this.author.id, this.guild);


    // other stuff
    this.createdAt = ctx.createdTimestamp;
    this.type = ctx.type;
    this.system = ctx.system;


    // even more stuff
    this.pinned = ctx.pinned;
    this.tts = ctx.tts;
    this.nonce = ctx.nonce;


    // lists
    this.embeds = ctx.embeds;
    this.ephemeral = ctx.ephemeral;
    this.components = ctx.components;
    this.attachments = ctx.attachments;
    this.stickers = ctx.stickers;
    this.files = ctx.files;
    this.flags = ctx.flags;


    // even even more more stuff stuff
    this.position = ctx.position;
    this.mentions = ctx.mentions;
    this.reactions = ctx.reactions;
    this.roleSubscriptionData = ctx.roleSubscriptionData;
    this.editedAt = ctx.editedTimestamp;
    this.activity = ctx.activity;
    this.referece = ctx.reference;
    this.interaction = ctx.interaction;
    this.raw = ctx;
});
