const MessageEdit = require('../index.js');


MessageEdit.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "channels", "users", "messages");


    // circle stuff but can we get much higher (so hiigghhh)
    this.guild = await guilds.get(ctx.guildId);
    this.channel = await channels.get(ctx.channelId, this.guild);

    
    // contents
    this.content = ctx.content;
    this.to = await messages.get(ctx.id, ctx.channel);
    if (ctx.reference) this.replier = await messages.get(ctx.reference.messageId, this.channel);
    


    // ids
    this.id = ctx.id;
    this.channelId = ctx.channelId;
    this.guildId = ctx.guildId;
    this.webhookId = ctx.webhookId;
    this.appId = ctx.applicationId;


    // circle thingstuff
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
    this.components = ctx.components;
    this.attachments = ctx.attachments;
    this.stickers = ctx.stickers;
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
