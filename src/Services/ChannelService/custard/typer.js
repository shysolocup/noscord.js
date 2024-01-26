const ChannelService = require('../index.js');


ChannelService.newF("typer", function(type) {
    let channel;

    switch(type) {
        case 0: channel = new types.TextChannel; break;
        case 1: channel = new types.DirectMessage; break;
        case 2: channel = new types.VoiceChannel; break;
        case 3: channel = new types.GroupChat; break;
        case 4: channel = new types.Category; break;
        case 5: channel = new types.AnnouncementsChannel; break;
        case 10: channel = new types.AnnouncementsThread; break;
        case 11: channel = new types.ThreadChannel; break;
        case 12: channel = new types.ThreadChannel; break;
        case 13: channel = new types.StageChannel; break;
        // case 14: channel = new types.HubChannel; break;
        // case 15: channel = new types.ForumChannel; break;
        // case 16: channel = new types.MediaChannel; break;
    };

    return channel
});
