module.exports = (handler) => { handler.init(

    
    name = ["memberKick", "kick", "guildKickAdd"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.GuildMemberAction;
        
        await mbm.apply(member);
        
        return [mbm, mbm.moderator, mbm.guild];
    },

    
    glue = "guildMemberRemove", // what discord.js event it's tied to

    
    term = async function(member) { // specific action that triggers the event
        const logs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_KICK',
        });

        const log = fetchedLogs.entries.first();
        if (!log) return;

        const { executor, target } = log;

        return (member.id == target.id)
    }
)}
