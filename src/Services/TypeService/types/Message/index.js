const TypeService = require('../../index.js');
const { Soup } = require('stews');

TypeService.newC("Message", class {
  constructor(ctx) {
    this.id = ctx.id;
    this.channelId = ctx.channelId;
    this.guildId = ctx.guildId;
    this.createdAt = ctx.createdTimestamp;
    this.type = ctx.type;
    this.system = ctx.system;
    this.content = ctx.content;
    this.author = ctx.author;
    this.member = ctx.member;
    this.pinned = ctx.pinned;
    this.tts = ctx.tts;
    this.nonce = ctx.nonce;
    this.embeds = Soup.from(ctx.embeds);
    this.components = Soup.from(ctx.components);
    this.attachments = Soup.from(ctx.attachments);
    this.stickers = Soup.from(ctx.stickers);
    this.position = ctx.position;
    this.roleSubData = ctx.roleSubscriptionData;
    this.editedAt = ctx.editedTimestamp;
    this.reactions = Soup.from(ctx.reactions);
    this.mentions = Soup.from(ctx.mentions);
    this.webhookId = ctx.webhookId;
    this.appId = ctx.applicationId;
    this.activity = ctx.activity;
    this.flags = Soup.from(ctx.flags);
    this.referece = ctx.reference;
    this.interaction = ctx.interaction
  }
});

module.exports = Message;
