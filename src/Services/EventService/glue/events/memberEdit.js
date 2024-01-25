module.exports = (handler) => { handler.init(

    
    name = ["memberEdit", "memberUpdate", "guildMemberEdit", "guildMemberUpdate"],  // names of the event

    
    func = async function (member) { // formatting for types and stuff
        let types = this.types;
        let mbm = new types.VictimMember;
        
        await mbm.apply(member, 1);
        
        return [mbm, mbm.guild];
    },

    
    glue = "guildMember Update", // what discord.js event it's tied to
)}
