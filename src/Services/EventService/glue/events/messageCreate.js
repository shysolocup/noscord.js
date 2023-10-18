module.exports = (handler) => { handler.init(

    
    name = ["messageCreate", "send"],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let msg = new types.Message;
        
        await msg.apply(...Array.from(arguments));
    
        return [msg];
    }, 

    
    glue = "messageCreate" // what discord.js event it's tied to

    
)}
