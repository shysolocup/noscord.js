const GuildMemberAction = require('../index.js');


GuildMemberAction.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    const guilds = new client.GuildService;
    const channels = new client.ChannelService;
    const users = new client.UserService;

    
    
});
