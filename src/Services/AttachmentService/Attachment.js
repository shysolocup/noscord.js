const { AttachmentBuilder } = require('discord.js');
const AttachmentService = require('./index.js');
const Canvas = require('@napi-rs/canvas');


AttachmentService.newC("Attachment", class {
    constructor(imgUrl, settings) {
        let image = await Canvas.loadImage(imgUrl);
        
        let width = (settings.width) ? settings.width : image.width;
        let height = (settings.height) ? settings.height : image.height;
        
        let canvas = Canvas.createCanvas(width, height);
		let context = canvas.getContext('2d');

        context.drawImage(image, 0, 0, width, height);

        return new AttachmentBuilder(canvas.toBuffer("image/png"), settings);
    }
});


module.exports = Attachment;
