module.exports = (handler) => { handler.init(

    
    name = ["memberBan", "ban", "guildBanAdd", "guildMemberBan"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.GuildMemberAction;
        
        await mbm.apply(member, 2);
        
        return [mbm, mbm.moderator, mbm.guild];
    },

    
    glue = "guildBanAdd", // what discord.js event it's tied to
)}
