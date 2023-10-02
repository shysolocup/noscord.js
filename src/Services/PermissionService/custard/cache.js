const { Soup } = require('stews');
const PermissionService = require('../index.js');


PermissionService.newF("cache", async function(obj) {
    if (obj.constructor.toString() == "GuildMember") {
        let stuff = Soup.from(obj.permissions.serialize());

        stuff = stuff.mapKey( (name) => {
            return Noodle.from(name).toLowerCase(0).toString();
        });

        return stuff.pour();
    }
    else {
        let roles = new this.parent.RoleService;

        let overwrites = Soup.from(obj.permissionOverwrites.cache);
        let perms = Soup.from(await this.parent.DefPerms);

        let returns = new Soup(Object);

        for (let i = 0; i < overwrites.length; i++) {
            let [id, ow] = overwrites.entries[i];

            let role = await roles.get(id, ow.channel.guild);

            returns.push(id, new Soup({
                id: id,
                role: role,
                channel: ow.channel,
                guild: ow.channel.guild,
                perms: new Soup(Object)
            }));

            let thing = returns.get(id);
            let p = thing.get("perms");

            let { allow, deny } = ow;


            // filtering out allow and deny
            let a = perms.filter( (perm, bit) => {
                return bit == allow;
            });
            let b = perms.filter( (perm, bit) => {
                return bit = deny;
            });


            // mapping to be lowercase
            a = a.mapKey( (name) => {
                return Noodle.from(name).toLowerCase(0).toString();
            });
            b = b.mapKey( (name) => {
                return Noodle.from(name).toLowerCase(0).toString();
            });
            
            
            // adding to list

            b = b.filter( (name) => {
                return !a.includes(name);
            });

            a.forEach( (name) => {
                p.push(name, true);
            });
            b.forEach( (name) => {
                p.push(name, false);
            });
        }

        return returns.pour();
    }
})
