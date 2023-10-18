const { AttachmentBuilder } = require('discord.js');
const TypeService = require('../../index.js');
const fs = require('fs');


TypeService.newC("Attachment", class {
    constructor(canvas, settings={}) {
        this.png = new AttachmentBuilder( canvas.toBuffer("image/png"), settings );
	
		this.name = png.name
		this.description = png.description;
		this.embed = `attachment://${png.name}`

		this.base = png.attachment;

		this.url = canvas.toDataURL();
		this.raw = canvas;

        this.width = canvas.width;
        this.height = canvas.height;

        this.settings = settings;
    }


	[Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return this.embed;
        }
    }
});


module.exports = Attachment;


let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
