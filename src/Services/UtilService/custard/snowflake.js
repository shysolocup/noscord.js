const UtilService = require('../index.js');


UtilService.newF("snowflake", function(date=new Date()) {
    if (date.constructor.name == "Timestamp") date = date.date;
    return ((BigInt(date.valueOf()) - BigInt(1420070400000)) << BigInt(22)).toString();
});
