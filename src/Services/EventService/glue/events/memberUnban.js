module.exports = (handler) => { handler.init(

    
    name = ["memberUnban", "unban", "guildBanRemove", "guildMemberUnban"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.VictimMember;
        
        await mbm.apply(member, 5);
        
        return [mbm, mbm.moderator, mbm.guild];
    },

    
    glue = "guildBanRemove", // what discord.js event it's tied to
)}
