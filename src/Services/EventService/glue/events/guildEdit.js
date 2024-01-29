module.exports = (handler) => { handler.init(

    
    name = ["guildEdit", "guildUpdate"],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let action = new types.VictimGuild;
        
        await action.apply(ctx, 2);
        
        return [action, action.moderator, action.guild];
    }, 

    
    glue = "guildUpdate", // what discord.js event it's tied to
)}
