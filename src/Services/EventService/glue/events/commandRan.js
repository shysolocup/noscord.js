module.exports = (handler) => { handler.init(

    
    name = "commandRan",  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let client = this.parent.parent;
        let types = this.types;
        
        let command = new types.CommandRun;
        let cmd = {};

        
        if (client.commands.has(ctx.commandName)) {
            let raw = client.commands.get(ctx.commandName);
            cmd = Soup.from({
                name: raw.info.get("name"),
                description: raw.info.get("description"),
                cooldown: raw.info.get("cooldown"),
                options: raw.info.get("options"),
                nsfw: raw.info.get("nsfw"),
                data: raw.data
            }).copy().pour();
            cmd.args = ctx.options.data;
        }

        
        await command.apply(ctx, cmd);
        return [command, cmd];
    }, 

    
    glue = "interactionCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return ctx.isChatInputCommand();
    }
)}
