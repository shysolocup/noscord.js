module.exports = (handler) => { handler.init(

    
    name = ["messagePin", "pin", "messagePinned", "pinned"],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let client = this.parent.parent;
        client.import("types", "channels");

        let channel = channels.typer(ctx.type);
        let msgType = new types.Message;

        let msg = (await ctx.messages.fetchPinned()).first();
        
        await channel.apply(ctx);
        await msgType.apply(msg);
        
        return [msgType, channel];
    }, 

    
    glue = "channelPinsUpdate", // what discord.js event it's tied to
)}
