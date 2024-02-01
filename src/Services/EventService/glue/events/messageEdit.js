module.exports = (handler) => { handler.init(

    
    name = ["messageEdit", "messageUpdate", "edit"],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let client = this.client;
        client.import("messages");

        let msg = new types.VictimMessage;
        
        await msg.apply(ctx, 0);

        msg.to = edited;
        
        return [msg, msg.edits];
    }, 

    
    glue = "messageUpdate", // what discord.js event it's tied to
)}
