module.exports = (handler) => { handler.init(

    
    name = ["memberKick", "kick"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.GuildMember;
        let exc = new types.GuildMember;
        
        await mbm.apply(member);
        await exc.apply()
        
        return [mbm, mbm.guild];
    },

    
    glue = "guildMemberRemove", // what discord.js event it's tied to
)}
