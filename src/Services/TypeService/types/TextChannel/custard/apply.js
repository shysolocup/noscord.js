const TextChannel = require('../index.js');


TextChannel.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util");

    // ids
    this.id = ctx.id;
    this.name = ctx.name;
    this.nsfw = ctx.nsfw;
    this.type = ctx.type;
    this.viewable = ctx.viewable;
    this.category = ctx.parent;
    this.categoryId = ctx.parentId;
    this.guildId = ctx.guildId;
    this.url = `https://discord.com/channels/${ctx.guildId}/${ctx.id}`;
    this.mention = `<#${ctx.id}>`;
    this.topic = ctx.topic;


    // stuff
    this.guild = await guilds.get(ctx.guildId);
    this.flags = ctx.flags;
    this.partial = ctx.partial;
    this.permissionOverwrites = ctx.permissionOverwrites;
    this.permissionsLocked = ctx.permissionsLocked;
    this.position = ctx.position;
    this.rateLimitPerUser = ctx.rateLimitPerUser;
    this.rawPosition = ctx.rawPosition;
    this.threads = await channels.threads(ctx);


    // messages
    this.messages = ctx.messages;
    this.msgList = await messages.list(ctx);
    this.lastMsg = await messages.get(ctx.lastMessageId);
    this.lastMsgId = ctx.lastMessageId;


    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
        lastPin: new Timestamp(ctx.lastPinAt)
    }
    


    // booleans
    this.deleteable = ctx.deleteable;


    this.raw = ctx;

});
