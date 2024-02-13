module.exports = (handler) => { handler.init(

    
    name = "emojiCreate",  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let action = new types.VictimEmoji;
        
        await action.apply(ctx, 0);
        
        return [action, action.moderator, action.guild];
    }, 

    
    glue = "emojiCreate", // what discord.js event it's tied to
)}
