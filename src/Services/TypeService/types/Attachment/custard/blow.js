const Attachment = require('../index.js');
const Canvas = require('@napi-rs/canvas');


Attachment.newF("blow", async function(amount, settings={}) {
    let img = this.png.attachment;

	let image = await Canvas.loadImage(img);
	
	width = ((width) ? width : image.width)*amount;
	height = ((height) ? height : image.height)*amount;
	
	let canvas = Canvas.createCanvas(width, height);
	let context = canvas.getContext('2d');
	
	context.drawImage(image, 0, 0, width, height);
	
	return new Attachment(canvas, settings);
});
