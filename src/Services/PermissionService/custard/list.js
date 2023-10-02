const { Soup } = require('stews');
const PermissionService = require('../index.js');


PermissionService.newF("list", async function(obj) {
    const users = new this.parent.UserService;
    const channels = new this.parent.ChannelService;
    const roles = new this.parent.RoleService;


    if (await users.get(obj.id, obj.guild)) {
        let user = await users.get(obj.id, obj.guild);

        let stuff = Soup.from(user.permissions.toArray());

        stuff = stuff.map( (name) => {
            return Noodle.from(name).toLowerCase(0).toString();
        });

        return stuff.pour();
    }
    
    else if (await roles.get(obj.id, obj.guild)) {
        let role = await roles.get(obj.id, obj.guild);

        let stuff = Soup.from(role.permissions.toArray());

        stuff = stuff.map( (name) => {
            return Noodle.from(name).toLowerCase(0).toString();
        });

        return stuff.pour();
    }

    else if (await channels.get(obj.id, obj.guild)) {
        let channel = await channels.get(obj.id, obj.guild);

        let overwrites = Soup.from(channel.permissionOverwrites.cache);
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

            let { allow } = ow;


            // filtering out allow and deny
            let a = perms.filter( (perm, bit) => {
                return bit == allow;
            });


            // mapping to be lowercase
            a = a.mapKey( (name) => {
                return Noodle.from(name).toLowerCase(0).toString();
            });

            
            // add to list
            a.forEach( (name) => {
                p.push(name, true);
            });
        }

        return returns.pour();
    }
});
