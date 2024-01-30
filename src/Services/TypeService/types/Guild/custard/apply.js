const { Soup } = require('stews');
const Guild = require('../index.js');
const pend = require('pender');


Guild.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "users", "util", "roles", "logs", "types");

    
    // info
    this.id = ctx.id;
    this.url = (ctx.vanityURLCode) ? `discord.gg/${ctx.vanityURLCode}` : null
    this.name = ctx.name;
    this.description = ctx.description;
    this.owner;
    this.ownerId = ctx.ownerId;
    this.verified = ctx.verified;
    this.verificationLevel = ctx.verificationLevel;
    this.applicationId = ctx.applicationId;
    this.locale = ctx.preferredLocale;
    this.acronym = ctx.nameAcronym;
    this.urlCode = ctx.vanityURLCode
    this.urlUses = ctx.vanityURLUses
    // this.banner
    // this.icon


    // bools
    this.available = ctx.available;
    this.partnered = ctx.partnered;
    this.large = ctx.large;

    
    // lists
    this.features = ctx.features;

    
    // groups
    this.groups = pend( async () => {
        let stuff = new Soup({
            members: new types.MemberGroup(),
            channels: new types.ChannelGroup(),
			emojis: new types.EmojiGroup(),
			stickers: new types.StickerGroup,
			roles: new types.RoleGroup,
        });

        for (let i = 0; i < stuff.length; i++) {
            await stuff.values[i].apply(this);
        }

        return stuff
    }, "ChildGroups" );
	
	this.children = this.groups

	/*
    this.channels;
    this.textChannels;
    this.voiceChannels;
    this.threadChannels;
    this.categories;
    this.allChannels;
	*/

    
    // counts
    this.memberCount;
    this.botCount;
    this.userCount;
    this.channelCount;
    this.categoryCount;
    this.textChannelCount;
    this.voiceChannelCount;
    this.threadCount;


    // more lists
    this.commands = ctx.commands;
    this.invites = ctx.invites;
    this.presences = ctx.presences;
    this.events = ctx.scheduledEvents;
    this.stages = ctx.stageInstances;

    
    // channel stuff
    this.afkChannelId = ctx.afkChannelId;
    this.afkTimeout = ctx.afkTimeout;
    
    this.updatesChannelId = ctx.publicUpdatesChannelId;
    
    this.rulesChannelId = ctx.rulesChannelId;

    this.alertsChannelId = ctx.safetyAlertsChannelId;

    this.systemChannelFlags = ctx.systemChannelFlags;
    this.systemChannelId = ctx.systemChannelId;

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


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});


    // groups and fixes
    this.owner = await users.get(ctx.ownerId, this);

	this.client = client;
});
