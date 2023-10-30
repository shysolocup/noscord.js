module.exports = (handler) => { handler.init(

    
    name = ["messageEdit", "messageUpdate", "edit"],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let client = this.client;
        client.import("messages");

        console.log(arguments);
        
        let msg = new types.Message;
        
        await msg.apply(ctx);
        let edited = await messages.get(ctx.id);
        
        return [msg, edited];
    }, 

    
    glue = "messageUpdate", // what discord.js event it's tied to
)}
