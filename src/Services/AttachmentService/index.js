const { Client } = require('../../Client');
const fs = require('fs');

Client.newC("AttachmentService");

module.exports = AttachmentService;

require('./Attachment.js');
