const { Client } = require('../../Client');

Client.newC("ComponentService");

module.exports = ComponentService;

require('./Button.js');
require('./Selection.js');
require('./Embed.js');
require('./Row.js');


require('./functions/lock.js');
require('./functions/unlock.js');
