module.exports = (handler) => { handler.init(

    
    name = "channelDelete",  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let channel = types[ctx.constructor.name];
        
        await channel.apply(...Array.from(arguments));
        
        return [channel];
    }, 

    
    glue = "channelDelete", // what discord.js event it's tied to
)}
