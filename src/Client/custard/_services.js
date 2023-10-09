const { Client } = require('../index.js');
const { Soup } = require('stews');


Client.newF("_services", function() {
        const serv_dir = require('../../Services/_funkydir');

    
        let srv = new Soup(Object);
        let Services = fs.readdirSync(serv_dir).filter( folder => (folder.endsWith("Service")) );

    
        Services.forEach( (folder) => {
            let serv = require(`../../Services/${folder}`);
			srv.push(serv.name, serv);
        });
    
		
		this.services = new Soup{
			types: new srv.TypeService,
			users: new srv.UserService,
			events: new srv.EventService,
			commands: new srv.CommandService,
			guilds: new srv.GuildsService,
			roles: new srv.RoleService,
			errors: new srv.ErrorService,
			channel: new srv.ChannelService,
			app: new srv.AppService,
			attachments: new srv.AttachmentService,
			components: new srv.ComponentService,
			expressions: new srv.ExpressionService,
			messages: new srv.MessageService,
			permissions: new srv.PermissionService,
			voice: new srv.VoiceService,
		};

    return this.services;
});
