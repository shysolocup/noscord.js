module.exports = (handler) => { handler.init(

    
    name = "channelDelete",  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let action = new types.GuildChannelAction;
        
        await action.apply(...Array.from(arguments));
        
        return [action, action.moderator, action.guild];
    }, 

    
    glue = "channelDelete", // what discord.js event it's tied to
)}
