const LogService = require('../index.js');


LogService.newF("logType", function (type) {
	return (typeof type == "number")
		? type
	: ( ["guildupdate", "guildedit"].includes(type.toLowerCase()) )
		? 1
	: ( ["channelcreate", "addchannel"].includes(type.toLowerCase()) )
		? 10
	: ( ["channelupdate", "channeledit"].includes(type.toLowerCase()) )
		? 11
    : ( ["channeldelete"].includes(type.toLowerCase()) )
		? 12
    : ( ["channeloverwrite", "channeloverwritecreate"].includes(type.toLowerCase()) )
		? 13
    : ( ["channeloverwriteupdate", "channeloverwriteedit"].includes(type.toLowerCase()) )
		? 14
    : ( ["channeloverwritedelete"].includes(type.toLowerCase()) )
		? 15
    : ( ["kick", "memberkick", "guildkick"].includes(type.toLowerCase()) )
		? 20
    : ( ["prune", "memberprune"].includes(type.toLowerCase()) )
		? 21
    : ( ["ban", "memberban", "guildban", "guildbanadd", "memberbanadd"].includes(type.toLowerCase()) )
		? 22
    : ( ["unban", "memberunban", "guildunban", "guildbanremove", "memberbanremove"].includes(type.toLowerCase()) )
		? 23
    : ( ["memberupdate", "memberedit"].includes(type.toLowerCase()) )
		? 24
    : ( ["memberroleupdate", "memberroleedit"].includes(type.toLowerCase()) )
		? 25
    : ( ["move", "membermove"].includes(type.toLowerCase()) )
		? 26
    : ( ["disconnect", "memberdisconnect"].includes(type.toLowerCase()) )
		? 27
    : ( ["addbot", "botadd"].includes(type.toLowerCase()) )
		? 28
    : ( ["rolecreate", "addrole"].includes(type.toLowerCase()) )
		? 30
    : ( ["roleupdate", "roleedit"].includes(type.toLowerCase()) )
		? 31
    : ( ["roledelete"].includes(type.toLowerCase()) )
		? 32
    : ( ["invite", "invitecreate"].includes(type.toLowerCase()) )
		? 40
    : ( ["inviteupdate", "inviteedit"].includes(type.toLowerCase()) )
		? 41
    : ( ["invitedelete"].includes(type.toLowerCase()) )
		? 42
    : ( ["webhookcreate"].includes(type.toLowerCase()) )
		? 50
    : ( ["webhookupdate", "webhookedit"].includes(type.toLowerCase()) )
		? 51
    : ( ["webhookdelete"].includes(type.toLowerCase()) )
		? 52
    : ( ["emojicreate", "addemoji"].includes(type.toLowerCase()) )
		? 60
    : ( ["emojiupdate", "emojiedit"].includes(type.toLowerCase()) )
		? 61
    : ( ["emojidelete"].includes(type.toLowerCase()) )
		? 62
    : ( ["messagedelete"].includes(type.toLowerCase()) )
		? 72
    : ( ["purge", "messagebulkdelete"].includes(type.toLowerCase()) )
		? 73
    : ( ["pin", "messagepin"].includes(type.toLowerCase()) )
		? 74
    : ( ["unpin", "messageunpin"].includes(type.toLowerCase()) )
		? 75
    : ( ["integrationcreate"].includes(type.toLowerCase()) )
		? 80
    : ( ["integrationupdate"].includes(type.toLowerCase()) )
		? 81
    : ( ["integrationdelete"].includes(type.toLowerCase()) )
		? 82
	: null;
});
