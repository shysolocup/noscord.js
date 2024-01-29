module.exports = (handler) => { handler.init(

    
    name = "guildCreate",  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let action = new types.VictimGuild;
        
        await action.apply(ctx, 0);
        
        return [action, action.moderator, action.guild];
    }, 

    
    glue = "guildCreate", // what discord.js event it's tied to
)}
