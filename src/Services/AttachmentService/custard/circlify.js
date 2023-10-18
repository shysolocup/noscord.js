const AttachmentService = require('../index.js');
const Canvas = require('@napi-rs/canvas');


AttachmentService.newF("circlify", async function(img, radius, settings={}) {
    const client = this.parent;
    let types = new client.TypeService;

    if (img instanceof types.Attachment) img = img.png.attachment;
    else if (img.constructor.name == "AttachmentBuilder") img = img.attachment;

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
	
	return new types.Attachment(canvas, settings);
});
