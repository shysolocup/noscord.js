const CommandService = require('../index.js');


CommandService.newF("optionType", function (type) {
	return (typeof type == "number")
		? type
	: ( ["sub_command", "sub_com", "sub"].includes(type.toLowerCase()) )
		? 1
	: ( ["sub_command_group", "sub_com_group", "sub_group"].includes(type.toLowerCase()) )
		? 2
	: ( ["string", "str"].includes(type.toLowerCase()) )
		? 3
	: ( ["integer", "int"].includes(type.toLowerCase()) )
		? 4
	: ( ["boolean", "bool"].includes(type.toLowerCase()) )
		? 5
	: ( ["user", "member"].includes(type.toLowerCase()) )
		? 6
	: (type.toLowerCase() == "channel")
		? 7
	: (type.toLowerCase() == "role")
		? 8
	: ( ["mentionable", "mention"].includes(type.toLowerCase())  )
		? 9
	: ( ["number", "num"].includes(type.toLowerCase()) )
		? 10
	: ( ["attachment", "file"].includes(type.toLowerCase()) )
		? 11
	: null;
});
