module.exports = (handler) => { handler.init(

    
    name = ["memberLeave", "leave", "guildMemberRemove"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.GuildMember;
        
        await mbm.apply(member);
        
        return [mbm, mbm.guild];
    },

    
    glue = "guildMemberRemove", // what discord.js event it's tied to
)}
