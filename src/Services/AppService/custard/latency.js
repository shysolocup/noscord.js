const AppService = require('../index.js');


AppService.newF("latency", function(msg, timestamp=null) {
	if (!timestamp) timestamp = new this.Timestamp();
	if (msg.constructor.name == "ChatInputCommandInteraction") return timestamp.date - msg.createdTimestamp
	else if (msg.constructor.name == "Message") return timestamp.date - msg.timestamps.created.date;
	else if (msg.constructor.name == "MessageEdit") return timestamp.date - msg.timestampes.edited.date;
	else return timestamp.date - msg.createdAt;
});
