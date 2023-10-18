module.exports = (handler) => { handler.init(

    
    name = ["selectionSubmit", "selection", "selectMenu", "submit", "select"],  // names of the event

    
    func = function (/**/) { // formatting for types and stuff
        return Array.from(arguments);
    }, 

    
    glue = "interactionCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return ctx.isStringSelectMenu()
    }
)}
