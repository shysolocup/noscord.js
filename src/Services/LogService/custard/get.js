const LogService = require('../index.js');


LogService.newF("get", async function(guild, settings) {
    const client = this.parent;
    client.import("util");

    if (settings.before) settings.before = util.snowflake(settings.before);
    if (settings.after) settings.after = util.snowflake(settings.after);
    if (settings.type) settings.type = this.logType(settings.type);

    return await guild.fetchAuditLogs(settings);
})
