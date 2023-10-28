const UtilService = require('../index.js');


UtilService.newF("latency", function(msg, timestamp=null) {
	if (!timestamp) timestamp = new this.Timestamp();
	
	if (msg.constructor.name == "ChatInputCommandInteraction" || msg.constructor.name == "CommandRun") return this.date - msg.createdTimestamp
	else if (msg.constructor.name == "Message") return timestamp.date - msg.timestamps.created.date;
	else if (msg.constructor.name == "MessageEdit") return timestamp.date - msg.timestampes.edited.date;
	else return timestamp.date - msg.createdAt;
});
