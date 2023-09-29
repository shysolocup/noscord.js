const ChannelService = require('./index.js');


ChannelService.newC("Channel", class {
    constructor(channel) {
        this.id = channel.id;
    }
});


module.exports = Channel;
