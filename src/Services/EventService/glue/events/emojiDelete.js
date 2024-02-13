module.exports = (handler) => { handler.init(

    
    name = "emojiDelete",  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let action = new types.VictimEmoji;
        
        await action.apply(ctx, 1);
        
        return [action, action.moderator, action.guild];
    }, 

    
    glue = "emojiDelete", // what discord.js event it's tied to
)}
