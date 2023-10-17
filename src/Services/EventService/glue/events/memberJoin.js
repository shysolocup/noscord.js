module.exports = (handler) => { handler.init(

    
    name = ["memberJoin", "join", "guildMemberAdd"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.GuildMember;
        
        await mbm.apply(member);
        
        return [mbm, mbm.guild];
    },

    
    glue = "guildMemberAdd", // what discord.js event it's tied to
)}
