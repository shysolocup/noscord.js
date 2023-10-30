const UtilService = require('../index.js');


UtilService.newF("snowflake", function(date=new Date()) {
    return return ((BigInt(date.valueOf()) - BigInt(1420070400000)) << BigInt(22)).toString();
});
