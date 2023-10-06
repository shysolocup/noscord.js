const AttachmentService = require('../index.js');
const Canvas = require('@napi-rs/canvas');


AttachmentService.newF("blow", async function(img, amount, settings={}) {
    const client = this.parent;
    let types = new client.TypeService;

    if (img instanceof types.Attachment) img = img.png.attachment;
    else if (img.constructor.name == "AttachmentBuilder") img = img.attachment;

	let image = await Canvas.loadImage(img);
	
	width = (width) ? width*amount : image.width*amount;
	height = (height) ? height*amount : image.height*amount;
	
	let canvas = Canvas.createCanvas(width, height);
	let context = canvas.getContext('2d');
	
	context.drawImage(image, 0, 0, width, height);
	
	return new types.Attachment(canvas, settings);
});
