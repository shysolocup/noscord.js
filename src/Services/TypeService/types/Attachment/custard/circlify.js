const Attachment = require('../index.js');
const Canvas = require('@napi-rs/canvas');


Attachment.newF("circlify", async function(settings={}) {
    let img = this.png.attachment;

	let image = await Canvas.loadImage(img);
	
	let width = (settings.width) ? settings.width : image.width;
	let height = (settings.height) ? settings.height : image.height;
	
	let canvas = Canvas.createCanvas(width, height);
	let context = canvas.getContext('2d');

    context.strokeRect(0, 0, width, height);
	context.beginPath();
	context.arc(width/2, height/2, width/2, 0, Math.PI * 2, true);
	context.closePath();
	context.clip();
	
	context.drawImage(image, 0, 0, width, height);
	
	return new Attachment(canvas, settings);
});
