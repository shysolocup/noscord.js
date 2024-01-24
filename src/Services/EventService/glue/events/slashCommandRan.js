module.exports = (handler) => { handler.init(

    
    name = [ "slashCommandRan", "commandRan", "slashRan", "slashCommand" ],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let client = this.parent.parent;
        let types = this.types;
        
        let command = new types.SlashCommandRun;
        let cmd = {};

        
        if (client.slashCommands.has(ctx.commandName)) {
            let raw = client.slashCommands.get(ctx.commandName);
            let cooldown = raw.info.get("cooldown");
            
            cmd = Soup.from({
                name: raw.info.get("name"),
                description: raw.info.get("description"),
                cooldown: raw.info.get("cooldown"),
                onCooldown: (cooldown) ? cooldown.has(ctx.user.id) : false,
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
