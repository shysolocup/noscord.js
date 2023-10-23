const CommandRun = require('../index.js');


CommandRun.newF("apply", async function(ctx, cmd={}) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "app");

    
    // info shitters
    this.id = ctx.commandId;
    this.name = ctx.commandName;
    this.description = cmd.description;
    this.args = cmd.args;
    this.cooldown = cmd.cooldown;
    this.nsfw = cmd.nsfw;
    this.data = cmd.data;
    
    this.type = ctx.commandType;
    this.options = ctx.options;
    

    // more slash command info shitters
    this.ranAt = new Timestamp(ctx.createdTimestamp);
    this.latency = new Date() - this.ranAt.date;
    this.deferred = ctx.deferred;
    this.replied = ctx.replied;
    this.ephemeral = ctx.ephemeral;

    
    // stuff
    this.applicationId = ctx.applicationId;
    this.channelId = ctx.channelId;
    this.guildId = ctx.guildId;
    this.channel = await channels.get(ctx.channelId);
    this.guild = await guilds.get(ctx.guildId);

    
    // author and user and member stuff
    this.user = await users.get(ctx.user.id);
    this.author = this.user;

    this.userId = ctx.user.id;
    this.authorId = ctx.user.id
    
    this.member = await users.get(ctx.user.id, this.guild);


    // some random shit
    this.version = ctx.version;
    this.appPerms = ctx.appPermissions;
    this.memberPerms = ctx.memberPermissions;
    this.locale = ctx.locale;
    this.guildLocale = ctx.guildLocale;
    this.webhook = ctx.webhook;
    this.createdTimestamp = ctx.createdTimestamp;
    
    this.raw = ctx;
});
