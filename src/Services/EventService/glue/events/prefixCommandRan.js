const { Soup } = require('stews');

module.exports = (handler) => { handler.init(

    
    name = [ "prefixCommandRan", "prefixCommand", "prefixRan" ],  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let client = this.parent.parent;
        let types = this.types;
        
        let command = new types.PrefixCommandRun;
        let cmd = {};

        let hasPrefix = false;
        let pf = null

        if (client.prefix) {
            if (client.prefix instanceof Array) {
                hasPrefix = client.prefixes.some( (prefix) => {
                    let has = ctx.content.startsWith(prefix);
                    if (has) pf = prefix;
                    return has;
                });
            }
            else if (client.prefix instanceof Object) {
                let prefixes = Soup.from(client.prefix);
                hasPrefix = prefixes.some( (guildId, prefix) => {
                    let has = ctx.guildId == guildId && ctx.content.startsWith(prefix)
                    if (has) pf = prefix;
                    return has;
                });
            }
            else {
                hasPrefix = ctx.content.startsWith(client.prefix);
                pf = client.prefix;
            }

            if (!hasPrefix) return;
        }

        
		let pos = (pf) ?			
			ctx.content.toLowerCase().indexOf(pf.toLowerCase())
			: 0;
		
		
		let rawName = (pf) ?
			ctx.content.toLowerCase().replace(pf.toLowerCase(), "").split(" ")[pos]
			: ctx.content.toLowerCase().split(" ")[pos];
        let name = null;


        let soup = new Soup(ctx.content.split(" "));
		soup.delete[pos];
        let args = soup.pour();

        
        let has = client.prefixCommands.some( (n, info) => {
            let h = rawName == n || (info.aliases && info.aliases.some( al => rawName == al ) );
            if (h) name = n;
            return h;
        });
        
        if (has) {
            let raw = client.prefixCommands.get(name);
            let cooldown = raw.info.get("cooldown");
            
            cmd = Soup.from({
                name: raw.info.get("name"),
                aliases: raw.info.get("aliases"),
                cooldown: raw.info.get("cooldown"),
                onCooldown: (cooldown) ? cooldown.has(ctx.user.id) : false,
                data: raw.data
            }).copy().pour();
            cmd.args = args;
        }
        else {
            return;
        }

        
        await command.apply(ctx, cmd);
        return [command, cmd];
    }, 

    
    glue = "messageCreate", // what discord.js event it's tied to
)}
