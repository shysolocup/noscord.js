module.exports = (handler) => { handler.init(

    
    name = "commandRan",  // names of the event

    
    func = function () { // formatting for types and stuff
        return Array.from(arguments);
    }, 

    
    glue = "interactionCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return ctx.isChatInputCommand();
    }
)}
