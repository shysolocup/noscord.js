module.exports = (handler) => { handler.init(

    
    name = "commandRan",  // names of the event

    
    func = function (..args) { // formatting for types and stuff
        let types = this.types;
        let command = new types.CommandRun;
        
        await command.apply(...args);
    
        return [command];
    }, 

    
    glue = "interactionCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return ctx.isChatInputCommand();
    }
)}
