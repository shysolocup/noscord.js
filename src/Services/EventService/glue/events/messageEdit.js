module.exports = (handler) => { handler.init(

    
    name = ["messageEdit", "messageUpdate", "edit"],  // names of the event

    
    func = async function (/**/) { // formatting for types and stuff
        let types = this.types;
        let msg = new types.MessageEdit;
        
        await msg.apply(...Array.from(arguments));
        
        return [msg];
    }, 

    
    glue = "messageUpdate", // what discord.js event it's tied to
)}
