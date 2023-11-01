const Guild = require('../index.js');


Guild.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "util", "roles", "logs");

    
    // info
    this.id = ctx.id;
    this.url = ctx.vanityURLCode
    this.name = ctx.name;
    this.description = ctx.description;
    this.owner = await users.get(ctx.ownerId, ctx);
    this.ownerId = ctx.ownerId;
    this.verified = ctx.verified;
    this.verificationLevel = ctx.verificationLevel;
    this.applicationId = ctx.applicationId;
    this.locale = ctx.preferredLocale;
    this.acronym = ctx.nameAcronym;
    this.urlUses = ctx.vanityURLUses
    // this.banner
    // this.icon


    // bools
    this.available = ctx.available;
    this.partnered = ctx.partnered;
    this.large = ctx.large;

    
    // lists
    this.features = ctx.features;
    
    this.members = await users.members(ctx);
    this.users = await users.list(ctx);
    this.bots = await users.bots(ctx);
    
    this.channels = await channels.list(ctx);
    this.textChannels = await channels.text(ctx);
    this.voiceChannels = await channels.voice(ctx);
    this.threadChannels = await channels.threads(ctx);
    this.categories = await channels.categories(ctx);
    this.allChannels = await channels.all(ctx);

    // counts
    this.memberCount = await users.memberCount(ctx);
    this.botCount = await users.botCount(ctx);
    this.userCount = await users.count(ctx);
    
    this.channelCount = await channels.count(ctx);
    this.categoryCount = await channels.categoryCount(ctx);
    this.emojis = ctx.emojis;
    this.stickers = ctx.stickers;
    this.commands = ctx.commands;
    this.invites = ctx.invites;
    this.presences = ctx.presences;
    this.events = ctx.scheduledEvents;
    this.stages = ctx.stageInstances;

    
    // channel stuff
    this.afkChannel = await channels.get(ctx.afkChannelId);
    this.afkChannelId = ctx.afkChannelId;
    this.afkTimeout = ctx.afkTimeout;
    
    this.updatesChannel = await channels.get(ctx.publicUpdatesChannelId);
    this.updatesChannelId = ctx.publicUpdatesChannelId;
    
    this.rulesChannel = await channels.get(ctx.rulesChannelId);
    this.rulesChannelId = ctx.rulesChannelId;

    this.alertsChannel = await channels.get(ctx.safetyAlertsChannelId);
    this.alertsChannelId = ctx.safetyAlertsChannelId;

    this.systemChannel = await channels.get(ctx.systemChannelId);
    this.systemChannelFlags = ctx.systemChannelFlags;
    this.systemChannelId = ctx.systemChannelId;

    this.widgetChannel = await channels.get(ctx.widgetChannelId);
    this.widgetChannelId = ctx.widgetChannelId;
    this.widgetEnabled = ctx.widgetEnabled;


    // approx
    this.approxMemberCount = ctx.approximateMemberCount;
    this.approxPresenceCount = ctx.approximatePresenceCount;

    
    // moderation
    this.rules = ctx.autoModerationRules
    this.filter = ctx.explicitContentFilter;
    this.nsfwLevel = ctx.nsfwLevel;
    this.mfaLevel = ctx.mfaLevel;
    this.bans = ctx.bans;
    this.logs = logs;


    // timestamps
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
        joined: new Timestamp(ctx.joinedAt)
    };

    this.createdAt = ctx.createdAt;
    this.joinedAt = ctx.joinedAt;

    // max
    this.max = {
        bitrate: ctx.maximumBitrate,
        members: ctx.maximumMembers,
        presences: ctx.maximumPresences,
        stageVideos: ctx.maxStageVideoChannelUsers,
        videos: ctx.maxVideoChannelUsers
    }


    // splashes
    this.discoverySplash = ctx.discoverySplash;
    this.splash = ctx.splash;


    // shard
    this.shard = ctx.shard;
    this.shardId = ctx.shardId;


    // voice stuff
    this.voiceAdapterCreator = ctx.voiceAdapterCreator;
    this.voiceStates = ctx.voiceStates;
    
    
    this.raw = ctx;
});
