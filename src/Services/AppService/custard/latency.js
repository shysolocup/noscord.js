const AppService = require('../index.js');


AppService.newF("latency", function(msg, timestamp=null) {
	if (!timestamp) timestamp = new this.Timestamp();
    return timestamp.date - msg.createdTimestamp
});
