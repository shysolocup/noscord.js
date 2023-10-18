module.exports = (handler) => { handler.init(

    
    name = "commandRan",  // names of the event

    
    func = function (ctx) { // formatting for types and stuff
        let client = this.parent.parent;
        let raw = client.commands.get(ctx.commandName);
        ctx.author = ctx.user;
        
        let cmd = Soup.from({

            name: raw.info.get("name"),
            description: raw.info.get("description"),
            cooldown: raw.info.get("cooldown"),
            options: raw.info.get("options"),
            nsfw: raw.info.get("nsfw"),
            data: raw.data

        }).copy().pour();
        cmd.args = ctx.options.data;
        
        return [ctx, cmd];
    }, 

    
    glue = "interactionCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return ctx.isChatInputCommand();
    }
)}
