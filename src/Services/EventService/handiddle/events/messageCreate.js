module.exports = (handler) => { handler.init(

    
    name = "messageCreate",  // name of the event

    
    func = async function (/**/) { // formatting for types and stuff
        let types = this.types;
        let msg = new types.Message;
        
        await msg.apply(...Array.from(arguments));
    
        return [msg];
    }, 

    
    glue = "messageCreate" // what discord.js event it's tied to

    
)}
