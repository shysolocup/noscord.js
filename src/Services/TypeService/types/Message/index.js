const TypeService = require('../../index.js');
const { Soup } = require('stews');

TypeService.newC("Message", class {
  constructor(ctx) {(async () => {
    const client = this.parent.parent;
    const guilds = new client.GuildService;
    const channels = new client.ChannelService;


    // ids
    this.id = ctx.id;
    this.channelId = ctx.channelId;
    this.guildId = ctx.guildId;
    this.webhookId = ctx.webhookId;
    this.appId = ctx.applicationId;


    // circle thingstuff
    this.guild = await guilds.get(this.guildId);
    this.channel = await channels.get(this.channelId);
    this.author = ctx.author;
    this.member = ctx.member;


    // other stuff
    this.createdAt = ctx.createdTimestamp;
    this.type = ctx.type;
    this.system = ctx.system;
    this.content = ctx.content;


    // even more stuff
    this.pinned = ctx.pinned;
    this.tts = ctx.tts;
    this.nonce = ctx.nonce;


    // lists
    this.embeds = Soup.from(ctx.embeds);
    this.components = Soup.from(ctx.components);
    this.attachments = Soup.from(ctx.attachments);
    this.stickers = Soup.from(ctx.stickers);
    this.reactions = Soup.from(ctx.reactions);
    this.mentions = Soup.from(ctx.mentions);
    this.flags = Soup.from(ctx.flags);


    // even even more more stuff stuff
    this.position = ctx.position;
    this.roleSubscriptionData = ctx.roleSubscriptionData;
    this.editedAt = ctx.editedTimestamp;
    this.activity = ctx.activity;
    this.referece = ctx.reference;
    this.interaction = ctx.interaction
    
  })()}
});

module.exports = Message;
