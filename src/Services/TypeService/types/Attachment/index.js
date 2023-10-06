const TypeService = require('../../index.js');
const { AttachmentBuilder } = require('discord.js');

TypeService.newC("Attachment", class {
    constructor(canvas) {
        this.png: new AttachmentBuilder( canvas.toBuffer("image/png"), settings ),
		this.jpeg: new AttachmentBuilder( canvas.toBuffer("image/jpeg"), settings ),
		this.url: canvas.toDataURL(),
		this.raw: canvas
    }
});

module.exports = ButtonPress;
