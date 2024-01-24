const { Soup } = require('stews');

module.exports = (handler) => { handler.init(

    
    name = [ "prefixCommandRan", "prefixCommand", "prefixRan" ],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let client = this.parent.parent;
        let types = this.types;
        
        let command = new types.PrefixCommandRun;
        let cmd = {};

        let hasPrefix = false;
        
        if client.prefix instanceof Array) {
            hasPrefix = client.prefixes.some( (prefix) => ctx.content.startsWith(prefix));
        }
        else if (client.prefix instanceof Object) {
            let prefixes = Soup.from(client.prefix);
            hasPrefix = prefixes.some( (guildId, prefix) => ctx.guildId == guildId && ctx.content.startsWith(prefix));
        }
        else {
            hasPrefix = ctx.content.startsWith(client.prefix);
        }

        if (!hasPrefix) return;


        let name = ctx.content.replace(prefix, "");
        let has = false;

        client.prefixCommands.forEach( () )
        
        if () {
            let raw = client.prefixCommands.get();
            let cooldown = raw.info.get("cooldown");
            
            cmd = Soup.from({
                name: raw.info.get("name"),
                aliases: raw.info.get("aliases"),
                cooldown: raw.info.get("cooldown"),
                onCooldown: (cooldown) ? cooldown.has(ctx.user.id) : false,
                data: raw.data
            }).copy().pour();
            cmd.args = ctx.options.data;
        }
        else {
            return;
        }

        
        await command.apply(ctx, cmd);
        return [command, cmd];
    }, 

    
    glue = "messageCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return ctx
    }
)}
