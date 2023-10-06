const TypeService = require('../../index.js');
const { AttachmentBuilder } = require('discord.js');

TypeService.newC("Attachment", class {
    constructor(canvas, settings={}) {
        this.png = new AttachmentBuilder( canvas.toBuffer("image/png"), settings );
		this.jpeg = new AttachmentBuilder( canvas.toBuffer("image/jpeg"), settings );

		this.url = canvas.toDataURL();
		this.raw = canvas;

        this.width = canvas.width;
        this.height = canvas.height;
    }
});

module.exports = Attachment;
