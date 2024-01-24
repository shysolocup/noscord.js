const ChannelService = require('../index.js');


ChannelService.newF("get", async function(id, guild=null) {
	const client = this.parent;
	client.import("types");
	
    if (!id) return null; 
    
    let raw = id; 
    
    if (raw.startsWith('<#') && raw.endsWith('>')) {
        raw = raw.slice(2, -1);
    }
    
    raw = raw.split("").join(""); 
    
    let thing = await ( 
		(guild) ? 
			guild.raw.channels : // if guild is given it gets from the guild
		
			this.parent._base.channels // if a guild is not given it gets from the client's channels
		
	).fetch(raw).catch(e=>{});

    let typed

    switch(thing.type) {
        case 0: typed = new types.TextChannel; break;
        // case 1: typed = new types.DmChannel; break;
        case 2: typed = new types.VoiceChannel; break;
        // case 3: typed = new types.GroupChatChannel; break;
        // case 4: typed = new types.Category; break;
        // case 5: typed = new types.AnnouncementsChannel; break;
        // case 10: typed = new types.AnnouncementsThread; break;
        // case 11: typed = new types.PublicThread; break;
        // case 12: typed = new types.PrivateThread; break;
        // case 13: typed = new types.StageChannel; break;
        // case 14: typed = new types.HubChannel; break;
        // case 15: typed = new types.ForumChannel; break;
        // case 16: typed = new types.MediaChannel; break;
    }

	if (thing && typed) await typed.apply(thing);
 
    return (!thing || !typed) ? null : typed;
});
