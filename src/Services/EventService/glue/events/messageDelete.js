module.exports = (handler) => { handler.init(

    
    name = ["messageDelete", "delete"],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let msg = (ctx.reference) ? new types.Message : new types.MessageReply;
        
        await msg.apply(...Array.from(arguments));
        
        return [msg];
    }, 

    
    glue = "messageDelete", // what discord.js event it's tied to
)}
