module.exports = (handler) => { handler.init(

    
    name = ["memberKick", "kick", "guildKickAdd", "guildMemberKick"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.GuildMemberAction;
        
        await mbm.apply(member, 1);
        
        return [mbm, mbm.moderator, mbm.guild];
    },

    
    glue = "guildMemberRemove", // what discord.js event it's tied to

    
    term = async function(member) { // specific action that triggers the event
        const { AuditLogEvent } = require('discord.js');
        
        const logs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberKick,
        });

        const log = logs.entries.first();
        if (!log) return;

        const { executor, target } = log;

        return (member.id == target.id)
    }
)}
